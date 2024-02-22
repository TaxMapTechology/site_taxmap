import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/TaxChat.css'
import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const TaxChat = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [mensagens, setMensagens] = useState([]);
 
  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const enviarMensagem = (mensagem) => {
    const novaMensagem = { texto: mensagem, tipo: 'enviado' };
    setMensagens([...mensagens, novaMensagem]);
    if (mensagem === '1' || mensagem === '2' || mensagem === '3') {
      processarRespostaAutomatica(mensagem);
    }
  };

  const processarRespostaAutomatica = (opcaoSelecionada) => {
    let resposta = '';

    switch (opcaoSelecionada) {
      case '1':
        resposta = 'Você selecionou a opção 1.';
        break;
      case '2':
        resposta = 'Você selecionou a opção 2.';
        break;
      case '3':
        resposta = 'Você selecionou a opção 3.';
        break;
      default:
        resposta = 'Desculpe, não entendi sua mensagem.';
    }

    const novaMensagem = { texto: resposta, tipo: 'recebido' };
    setMensagens([...mensagens, novaMensagem]);
  };

  return (
    <div>
      <button className='wpp' onClick={abrirModal} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <FaWhatsapp />
      </button>
      <Modal className="" isOpen={modalAberto} onRequestClose={fecharModal} style={{ content: { bottom: '20px', right: '20px' } }}>
        <div>
          <button className='close-wpp' onClick={fecharModal} style={{ position: 'absolute', top: '5px', right: '5px' }}>
          <IoMdClose />
          </button>
          <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
            {mensagens.map((mensagem, index) => (
              <div key={index} style={{ textAlign: mensagem.tipo === 'enviado' ? 'right' : 'left' }}>
                {mensagem.texto}
              </div>
            ))}
          </div>
          <div>
            <p>Escolha uma opção:</p>
            <button onClick={() => enviarMensagem('1')}>Falar com um colaborador</button>
            <button onClick={() => enviarMensagem('2')}>Tax Technology</button>
            <button onClick={() => enviarMensagem('3')}>Opção 3</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TaxChat;
