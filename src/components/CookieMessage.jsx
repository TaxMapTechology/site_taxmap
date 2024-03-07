import React, { useState } from 'react';
import './../styles/CookieMessage.css'; // Arquivo de estilos para o componente

const CookieMessage = () => {
  const [showMessage, setShowMessage] = useState(true);

  const handleAccept = () => {
    setShowMessage(false);
    localStorage.setItem('cookiesAccepted', 'true'); // Armazena que os cookies foram aceitos
  };

  // Verifica se o usuário já aceitou os cookies
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  // Esconde a mensagem se os cookies já foram aceitos
  if (cookiesAccepted) {
    return null;
  }

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
