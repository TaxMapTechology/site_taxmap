import React, { useEffect } from 'react';

const JivoChat = () => {
  useEffect(() => {
    // Cria um elemento script
    const script = document.createElement('script');

    // Define o atributo src do script como o URL fornecido pelo JivoChat
    script.src = '//code.jivosite.com/widget/GVxxRHCBw8';

    // Define o atributo async do script como true para carregar o script de forma assíncrona
    script.async = true;

    // Adiciona o script ao corpo do documento 
    document.body.appendChild(script);

    // Retorna uma função de limpeza para remover o script quando o componente for desmontado
    return () => {
      document.body.removeChild(script);
    };
  }, []); // O segundo argumento do useEffect é uma array vazia para garantir que o efeito seja executado apenas uma vez

  return (
    <div>
      {/* Conteúdo do seu componente */}
    </div>
  );
};

export default JivoChat;
