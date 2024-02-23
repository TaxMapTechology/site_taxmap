import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useState } from 'react';
import Slider from 'react-slick';

import '../styles/Clientes.css'

// Importe as imagens corretamente
import bombril from '../../public/Clientes/bombril.png';
import dexco from '../../public/Clientes/dexco.png';
import weatherford from '../../public/Clientes/weatherford.png';
import bluequest from '../../public/Clientes/bluequest.png';
import sierentz from '../../public/Clientes/sierentez.png';
import sisenor from '../../public/Clientes/sisenor.png';
import nexans from '../../public/Clientes/nexans.png';
import orlario from '../../public/Clientes/orlaRio.png';
import saab from '../../public/Clientes/saab.png';

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
    bluequest,
    sierentz,
    sisenor,
    nexans,
    orlario,
    saab,
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
