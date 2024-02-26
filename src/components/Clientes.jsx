import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useState } from 'react';
import Slider from 'react-slick';

import '../styles/Clientes.css'

// Importe as imagens corretamente
import bombril from '/clientes/bombril.png'
import dexco from '/clientes/dexco.png'
import weatherford from '/clientes/weatherford.png'
import ultragaz from '/clientes/ultragaz.png'
import sierentz from '/clientes/sierentz.png'
import sisenior from '/clientes/sisenor.png'
import tecnobre from '/clientes/tecnobre.png'
import ictsi from '/clientes/ictsi.png'
import saab from '/clientes/saab.png'
import marisa from '/clientes/marisa.png'
import uvpack from '/clientes/uvpack.png'
import petifive from '/clientes/petfive.png'
import willis from '/clientes/willis.png'
import stratura from '/clientes/stratura.png'
import HidroviasdoBrasil from '/clientes/HidroviasdoBrasil.png'
import chamfer from '/clientes/chamfer.png'
import hyundai from '/clientes/hyundai.png'
import hughes from '/clientes/hughes.png'

function Clientes() {
  // Não há necessidade de usar useRef e useEffect neste caso

  const [autoplay, setAutoplay] = useState(true);

  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 7, // Quantidade de imagens visíveis ao mesmo tempo
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Defina a velocidade como 0 para reprodução contínua
    cssEase: 'linear', // Use linear para reprodução contínua
  };

  // Pausar a reprodução automática quando o mouse entra no carrossel
  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  // Retomar a reprodução automática quando o mouse sai do carrossel
  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  // Substitua esses URLs pelas URLs reais de suas imagens
  const imagens = [
    bombril,
    dexco,
    weatherford,
    ultragaz,
    sierentz,
    sisenior,
    tecnobre,
    ictsi,
    saab,
    marisa,
    uvpack,
    petifive,
    willis,
    stratura,
    HidroviasdoBrasil,
    chamfer,
    hyundai,
    hughes,
  ];

  return (
    <div className="Slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2 className="Sliderh2">Aprovada por diversas empresas, como:</h2>
      <Slider {...settings}>
        {imagens.map((imagem, index) => (
          <div key={index}>
            <img src={imagem} alt={`Imagem ${index}`} className="Sliderimg" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Clientes;
