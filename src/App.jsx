import React, { useEffect, useRef } from "react";
import "./styles.css";


export default () => (
  <div className="App">
    <Logo />
    <h1>Welcome to Pico-React-App</h1>
    <p>Even more minimal than <a href="https://github.com/nano-react-app/nano-react-app">nano-react-app</a></p>
    <p>Currently using React version: {React.version}</p>
  </div>
);



function Logo() {
  const drawCanvas = (canvas) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    canvas.width = 300;
    canvas.height = 300;

    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.arc(150, 150, 120, 0, 2 * Math.PI);
    ctx.fill();
   
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(90, 90, 120, 120);
  };

  return <canvas ref={drawCanvas}></canvas>;
}