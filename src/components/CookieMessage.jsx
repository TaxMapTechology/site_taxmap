import React, { useState } from 'react';
import './../styles/CookieMessage.css'; // Arquivo de estilos para o componente

const CookieMessage = () => {
  const [showMessage, setShowMessage] = useState(true);

  const handleAccept = () => {
    setShowMessage(false);
    // Lógica para definir que o usuário aceitou os cookies (pode ser armazenado localmente ou globalmente)
  };

  return (
    <>
      {showMessage && (
        <div className="cookie-modal">
          <div className="cookie-content">
            <p>Este site usa cookies para garantir que você obtenha a melhor experiência.</p>
            <button onClick={handleAccept}>Aceitar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieMessage;
