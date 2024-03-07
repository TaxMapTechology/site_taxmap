import { useState } from 'react';

function CookieMessage() {
  const [aceitouCookies, setAceitouCookies] = useState(false);

  const handleAceitarCookies = () => {
    setAceitouCookies(true);
    // Aqui você pode armazenar a preferência do usuário sobre os cookies
    // por exemplo, em localStorage ou sessionStorage
  };

  if (aceitouCookies) {
    return null; // Não renderizar a mensagem se os cookies foram aceitos
  }

  return (
    <div className="cookie-message">
      <p>Nosso site utiliza cookies para garantir a melhor experiência para você. Ao continuar navegando, você concorda com o uso de cookies.</p>
      <button onClick={handleAceitarCookies}>Aceitar</button>
    </div>
  );
}

export default CookieMessage;
