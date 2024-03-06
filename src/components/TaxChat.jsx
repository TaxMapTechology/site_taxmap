import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/TaxChat.css'
import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';



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
      <Link to='https://api.whatsapp.com/send?phone=5511917065688?&text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site' target='_blank' className='wpp' style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <FaWhatsapp />
      </Link>
    </div>
  );
};

export default TaxChat;
