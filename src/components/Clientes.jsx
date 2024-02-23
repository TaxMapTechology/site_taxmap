import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useState } from 'react';
import Slider from 'react-slick';

import '../styles/Clientes.css'

// Importe as imagens corretamente
import bombril from '/clientes/Bombril.png'
import dexco from '/clientes/DEXCO.png'
import weatherford from '/clientes/Weatherford.png'
import ultragaz from '/clientes/Ultragaz.png'
import sierentz from '/clientes/Sierentz.png'
import sisenior from '/clientes/sisenior.png'
import tecnobre from '/clientes/Tecnobre.png'
import ictsi from '/clientes/ICTSI.png'
import saab from '/clientes/SAAB.png'
import marisa from '/clientes/marisa.png'
import uvpack from '/clientes/uvpack.png'
import petifive from '/clientes/Petfive.png'
import willis from '/clientes/willis.png'
import stratura from '/clientes/Stratura.png'
import HidroviasdoBrasil from '/clientes/HidroviasdoBrasil.png'
import chamfer from '/clientes/CHAMFER.png'

function Clientes() {
  // Não há necessidade de usar useRef e useEffect neste caso

  const [autoplay, setAutoplay] = useState(true);

  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 5, // Quantidade de imagens visíveis ao mesmo tempo
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
