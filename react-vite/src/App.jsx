import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Simple Card Component</h1>
      <Card title="Card Title 1" description="This is the description of Card 1." />
      <Card title="Card Title 2" description="This is the description of Card 2." />
      <Card title="Card Title 3" description="This is the description of Card 3." />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
  },
};

export default App;
