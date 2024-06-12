import React, { useState } from 'react';
import cuack from '../public/cuack.jpg';
import Header from './components/Header/Header.jsx';
const AsistenteVirtual = () => {
    const [mensaje, setMensaje] = useState('');

    const manejarCambio = (e) => {
        setMensaje(e.target.value);
    }
    return (
      <>
      <Header></Header>
      <div id="total">
        <img src={cuack} alt="" />
        <h1>ASSISTIA</h1>
        <h3>Tu asistente virtual</h3>
        <p></p>
        <div className="search-container">
          <input 
            type="text" 
            value={mensaje} 
            onChange={manejarCambio} 
            placeholder="¡Hola! ¿Cómo puedo ayudarte hoy?" 
          />
          <button>Search</button>
        </div>
      </div>
      </>
    );
}

export default AsistenteVirtual;
