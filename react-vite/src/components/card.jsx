import React from "react";

const Card = ({ title, description }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    maxWidth: "300px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  title: {
    marginBottom: "8px",
    fontSize: "18px",
    color: "#333",
  },
  description: {
    fontSize: "14px",
    color: "#555",
  },
};

export default Card;
