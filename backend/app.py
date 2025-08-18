from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import requests
from io import BytesIO
from PIL import Image
import firebase_admin
from firebase_admin import credentials, db
import math

app = Flask(__name__)
CORS(app)

# Inicializar Firebase Admin SDK
cred = credentials.Certificate('./esp32cam-3db20-firebase-adminsdk-fbsvc-d867f2a47d.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://esp32cam-3db20-default-rtdb.firebaseio.com/'
})

def medir_altura_planta_url(url, distancia_cm=24.4, fov_horizontal=62):
    """
    Mide la altura de la planta en cm usando la distancia conocida y FOV de la cámara.
    """
    try:
        response = requests.get(url)
        img = Image.open(BytesIO(response.content)).convert('RGB')
        img = np.array(img)
        img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
        
        alto_px, ancho_px = img.shape[:2]

        hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
        lower_green = np.array([25, 40, 40])
        upper_green = np.array([90, 255, 255])
        mask = cv2.inRange(hsv, lower_green, upper_green)

        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5,5))
        mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)
        mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)

        contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        if not contours:
            return 0
        
        main_contour = max(contours, key=cv2.contourArea)
        ys = main_contour[:, 0, 1]
        altura_pixeles = ys.max() - ys.min()

        fov_rad = math.radians(fov_horizontal)
        ancho_real_cm = 2 * distancia_cm * math.tan(fov_rad / 2)
        cm_por_pixel = ancho_real_cm / ancho_px
        altura_cm = altura_pixeles * cm_por_pixel

        return round(altura_cm, 2)

    except Exception as e:
        print("Error al medir planta:", e)
        return 0

@app.route('/api/ultima-imagen', methods=['GET'])
def ultima_imagen():
    try:
        ref_images = db.reference('esp32cam/images')
        data = ref_images.get()
        if not data:
            return jsonify({'error': 'No se encontraron imágenes'}), 404
        
        imagenes = sorted(data.values(), key=lambda x: x['timestamp'], reverse=True)
        ultima = imagenes[0]
        return jsonify({'filename': ultima['filename'], 'url': ultima['url']})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/listado-imagenes', methods=['GET'])
def listado_imagenes():
    try:
        ref_images = db.reference('esp32cam/images')
        data = ref_images.get()
        if not data:
            return jsonify({'imagenes': []})
        
        imagenes = sorted(data.values(), key=lambda x: x['timestamp'], reverse=True)
        resultado = [{'filename': img['filename'], 'url': img['url']} for img in imagenes]
        return jsonify({'imagenes': resultado})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/crecimiento', methods=['POST'])
def crecimiento():
    data = request.get_json()
    image_urls = data.get('imagenes')

    if not image_urls or not isinstance(image_urls, list):
        return jsonify({'error': 'Formato inválido. Se espera lista de URLs'}), 400

    resultados = []
    for i, url in enumerate(image_urls):
        altura = medir_altura_planta_url(url)
        altura_nativa = float(altura) if isinstance(altura, (np.float32, np.float64)) else int(altura)

        resultados.append({
            'dia': f'Día {i + 1}',
            'altura': altura_nativa
        })

    return jsonify({'datos': resultados})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
