import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

import '../styles/BackToTopButton.css'


const BackToTopButton = () => {
  const [mostrarBotao, setMostrarBotao] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setMostrarBotao(true);
      } else {
        setMostrarBotao(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {mostrarBotao && (
        <button className='arrow' onClick={voltarAoTopo} style={{ position: 'fixed', bottom: '20px', left: '20px' }}>
          <IoIosArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
