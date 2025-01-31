import React from "react";
import Background3D from "./components/Background3D";
import Navbar from "./components/navbar"; // Asegúrate de que tiene la mayúscula correcta

const App = () => {
  return (
    <div>
      <Navbar />
      <Background3D />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
          marginTop: "80px", // Este margen asegura que el contenido no quede debajo del navbar fijo
        }}
      >
        <h1>Bienvenido</h1>
        <p>Este es mi sitio web</p>
      </div>
    </div>
  );
};

export default App;
