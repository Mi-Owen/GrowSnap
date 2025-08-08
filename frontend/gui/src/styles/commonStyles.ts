import React from "react";

export const containerStyle: React.CSSProperties = {
  minHeight: "100vh",
};

export const sectionStyle: React.CSSProperties = {
  padding: "3rem 1rem",
  maxWidth: "1200px",
  margin: "0 auto",
};

export const footerStyle: React.CSSProperties = {
  textAlign: "center",
  marginTop: "4rem",
  paddingTop: "1.5rem",
  borderTop: "1px solid #e5e7eb",
  color: "#6b7280",
  fontSize: "0.95rem",
};

export const textColumnStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

export const titleStyle: React.CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  margin: "0",
  lineHeight: "1.2",
};

export const paragraphStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  lineHeight: "1.6",
  margin: 0,
};


export const responsiveStyle = `
  @media (max-width: 768px) {
    .home-section {
      padding: 2rem 1rem !important;
    }
  }
`;
