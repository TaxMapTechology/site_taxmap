import Header from "../components/Header"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// imagens

import imgbanner001 from '/Imagem_Banner_1_Home_Homem_Sorrindo_Com_Tablet.png'
import imgbanner002 from '/Imagem_Banner_2_Home_Reforma_Tributaria_Planalto2.png'
import imgbanner003 from '/Imagem_Banner_3_Home_Homem_Segurando_Tablet_Com_Numeros_No_Ar.png'
import logoGPTW from  '/Logo_gptw.png'

export default function Home() {

        const progressCircle = useRef(null);
        const progressContent = useRef(null);
        const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        };

    return(
        <>
        <Header />
            
            {/* Banner */}
            <div className="banner">
                <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{             
                delay: 5500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
                >
                    {/* Slinde one */}
                        <SwiperSlide className="slide-one">
                            <div className="texto-slide-one">
                                <img src={logoGPTW} alt="" className="logo-gptw" />
                                <h1>Somos a parceria do seu negócio no setor tributário.</h1>
                            </div>
                            <img src={imgbanner001} alt="" className="img-banner-001" />
                        </SwiperSlide>
                    {/* Slinde one */}

                    {/* Slinde two */}
                        <SwiperSlide className=".slide-two">
                            <div className="slide-content">
                            <div className="texto-slide-one"> 
                                <h1>Reforma Tributária: Live + Resumo Exclusivo</h1>
                                <p>Aqui na TaxMap, desenvolvemos 3 conteúdos especiais e gratuitos sobre a Reforma Tributária para apoiar a sua empresa! </p>
                                <a href="" className="btn-reforma">Inscreva-se para acessar</a>
                            </div>
                            </div>
                            <img src={imgbanner002} alt="" id="img-banner-002" />
                        </SwiperSlide>
                    {/* Slinde two */}

                    {/* Slinde three */}
                        <SwiperSlide className=".slide-two">
                        <div className="slide-content">
                            <div className="texto-slide-one"> 
                                <h1>Tax Technology</h1>
                                <p>Oferecemos soluções tecnológica avançadas e customizadas para aprimorar os processos relacionados aos tributos.</p>
                                <a href="" className="btn-reforma">Saiba mais</a>
                            </div>
                            </div>
                            <img src={imgbanner003} alt="" id="img-banner-002" />
                        </SwiperSlide>
                     {/* Slinde three */}

                    <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
            {/* Banner */}

            {/* Servicos */}
            <section className="servicos">
                <h1>Conheça sobre os nossos serviços</h1>
            </section>
            {/* Servicos */}


        </>
    )
}