import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa ReactDOM desde 'react-dom/client' para React 18 y superior
import App from './App'; // Asegúrate de que el archivo App.js exista en la misma carpeta

// Crear un contenedor para la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar el componente App en el contenedor
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);