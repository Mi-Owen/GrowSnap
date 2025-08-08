from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS  # <-- importa CORS
import cv2
import numpy as np
import os
import re

app = Flask(__name__)

# Ruta donde están las imágenes
IMAGES_DIR = os.path.dirname(os.path.abspath(__file__))

# Función para medir la altura de la planta en píxeles
def medir_altura_planta(image_path):
    try:
        img = cv2.imread(image_path)
        hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

        lower_green = np.array([25, 80, 80])
        upper_green = np.array([90, 255, 255])
        mask = cv2.inRange(hsv, lower_green, upper_green)

        contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        if not contours:
            return 0

        main_contour = max(contours, key=cv2.contourArea)
        _, y, _, h = cv2.boundingRect(main_contour)

        return h
    except Exception:
        return 0
@app.route('/images/<filename>')
def serve_image(filename):
    return send_from_directory('.', filename)

@app.route('/api/ultima-imagen', methods=['GET'])
def ultima_imagen():
    patron = re.compile(r'imagen_dia(\d+)\.jpg$')
    imagenes = [f for f in os.listdir('.') if patron.match(f)]
    
    if not imagenes:
        return jsonify({'error': 'No se encontraron imágenes'}), 404

    # Extrae el número del día de cada imagen
    imagenes.sort(key=lambda f: int(patron.match(f).group(1)), reverse=True)
    ultima = imagenes[0]

    return jsonify({'filename': ultima})


# Endpoint REST para obtener alturas
@app.route('/api/crecimiento', methods=['POST'])
def crecimiento():
    data = request.get_json()
    image_names = data.get('imagenes')

    if not image_names or not isinstance(image_names, list):
        return jsonify({'error': 'Formato inválido. Se espera lista de nombres de imágenes'}), 400

    resultados = []
    for i, name in enumerate(image_names):
        path = os.path.join(IMAGES_DIR, name)
        altura = medir_altura_planta(path)
        resultados.append({
            'dia': f'Día {i + 1}',
            'altura': altura
        })

    return jsonify({'datos': resultados})

if __name__ == '__main__':
    CORS(app)
    app.run(port=5000, debug=True)
