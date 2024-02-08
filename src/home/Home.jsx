import Header from "../components/Header"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

import 'swiper/css/effect-coverflow';

import clientes from '/clientes/Imagem_Servicos_Planejamento_Tributario_Box.png'

import './home.css';

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow, Mousewheel, Keyboard } from 'swiper/modules';


import Footer from "../components/Footer";


// imagens 

import imgbanner001 from '/Imagem_Banner_1_Home_Homem_Sorrindo_Com_Tablet.png'
import imgbanner002 from '/Imagem_Banner_2_Home_Reforma_Tributaria_Planalto2.png'
import imgbanner003 from '/Imagem_Banner_3_Home_Homem_Segurando_Tablet_Com_Numeros_No_Ar.png'
import logoGPTW from  '/Logo_gptw.png'
import imgNotebook from '/Imagem_Notebook_Com_Informativo_Na_Tela.png'
import revista from '/Imagem_Informativo_Mensal_Dezembro_2023_TaxMap.png'

export default function Home() {

        const progressCircle = useRef(null);
        const progressContent = useRef(null);
        const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        };

        const [swiperRef, setSwiperRef] = useState(null);

    return(
        <>
        <Header />
            
            {/* Banner */}
            <div className="banner">
                <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{             
                delay: 15000,
                disableOnInteraction: false,
                }}
                // pagination={{
                // clickable: true,
                // }}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
                >
                    {/* Slinde one */}
                        <SwiperSlide className="slide-one">
                            <div className="texto-slide-one">
                                <img src={logoGPTW} alt="" className="logo-gptw" />
                                <h1>Somos a parceira do seu negócio no setor tributário.</h1>
                            </div>
                            <img src={imgbanner001} alt="" className="img-banner-001" />
                        </SwiperSlide>
                    {/* Slinde one */}

                    {/* Slinde two */}
                        <SwiperSlide className="slide-two">
                            <div className="slide-content">
                            <div className="texto-slide-one"> 
                                <h1>Reforma Tributária: <br /> Live + Resumo Exclusivo</h1>
                                <p>Aqui na TaxMap, desenvolvemos 3 conteúdos especiais e gratuitos sobre a Reforma Tributária para apoiar a sua empresa! </p>
                                <a href="https://forms.office.com/pages/responsepage.aspx?id=lG4-94i7tk-C2JeQI5RvtfDQNRLPvl1Jj-F9cPawVUNUQlNOOUk3SzdXT1dUSjFPTTBGV1pBSlBaSS4u" target="_blank" className="btn-reforma">Inscreva-se para acessar</a>
                            </div>
                            </div>
                            <img src={imgbanner002} alt="" id="img-banner-002" />
                        </SwiperSlide>
                    {/* Slinde two */}

                    {/* Slinde three */}
                        <SwiperSlide className="slide-three">
                        <div className="slide-content">
                            <div className="texto-slide-one"> 
                                <h1>Tax Technology</h1>
                                <p>Oferecemos soluções tecnológicas avançadas e customizadas para aprimorar os processos relacionados aos tributos.</p>
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
                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                        type: 'bullets',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="Swiper-servicos">


                        <SwiperSlide className="cards-servicos planejamento">
                           {/* <h2><a href="" className="p_servico">Planejamento Tributário</a></h2> */}

                                <div class="cardBox">
                                <div class="card">
                                    <div class="h4">Planejamento Tributário <br /> <span>+</span> </div>
                                
                                    <div class="content">
                                    <div class="h3">Planejamento Tributário</div>
                                    <p>Prática fundamental para qualquer empresa ou empreendedor que deseja maximizar seus lucros e manter a saúde financeira...</p>
                                    <a>Clique aqui e saiba mais</a>
                                    </div>
                                </div>
                                </div>
                            </SwiperSlide>


                        <SwiperSlide className="cards-servicos compliance">
                            <div class="cardBox">
                                <div class="card">
                                    <div class="h4">Compliance Tributário<br /> <span>+</span> </div>
                                
                                    <div class="content">
                                    <div class="h3">Compliance Tributário</div>
                                    <p>Prática de cumprir integralmente as obrigações fiscais estabelecidas pelos órgãos reguladores...</p>
                                    <a>Clique aqui e saiba mais</a>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                        <SwiperSlide className="cards-servicos consultoria">
                            <div class="cardBox">
                                <div class="card">
                                    <div class="h4">Consultoria Tributária <br /> <span>+</span> </div>
                                
                                    <div class="content">
                                    <div class="h3">Consultoria Tributária</div>
                                    <p>Conjunto de estratégias e ações que incluem a revisão minuciosa das obrigações fiscais, identificação de riscos...</p>
                                    <a>Clique aqui e saiba mais</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="cards-servicos technology">

                            <div class="cardBox">
                                <div class="card">
                                    <div class="h4">Tax Technology <br /> <span>+</span> </div>
                                
                                    <div class="content">
                                    <div class="h3">Tax Technology</div>
                                    <p>Essa abordagem inovadora integra ferramentas inteligentes, automação e análise de dados para simplificar a conformidade fiscal...</p>
                                    <a>Clique aqui e saiba mais</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
            </section>
            {/* Servicos */}

            {/* materiais */}
            <section className="banner-materias">
                    <img src={imgNotebook} alt="" className="img-materiais"/>
                    <h2>Aproveite os diversos materiais gratuitos do universo tributário que desenvolvemos para o setor</h2>
            </section>
            {/* materiais */}

            {/* section youtube */}
                <section className="section-youtube">


                    <h2>Assista aos nossos vídeos exclusivos</h2>
                    <div className="section-youtube-div">
                        <div className="iframes-videos">
                            <iframe src="https://www.youtube.com/embed/H02iYCvF7CU?si=Top61moY63BJtuol" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="iframe-principal"></iframe>
                        </div>
                        <div className="iframes-list">
                            <iframe width="230px" height="120px" src="https://www.youtube.com/embed/H02iYCvF7CU?si=Top61moY63BJtuol" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="iframes-list"></iframe>

                            <iframe width="230px" height="120px" src="https://www.youtube.com/embed/H02iYCvF7CU?si=Top61moY63BJtuol" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="iframes-list"></iframe>

                            <iframe width="230px" height="120px" src="https://www.youtube.com/embed/H02iYCvF7CU?si=Top61moY63BJtuol" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="iframes-list"></iframe>
                        </div>
                    </div>

                </section>       
            {/* section youtube */}
            
            {/* Section revista */}
                <section className="revista-online">
                    <h1>Se atualize com as principais notícias e artigos do universo tributário</h1>

                    <div className="revista-div-flex">
                        <img src={revista} alt="" />
                    
                        <div className="revista-div-texto">
                            <h2>Informativo Mensal</h2>
                            <p>Este é um compilado exclusivo que desenvolvemos com as atualizações do universo tributário, para você se manter informado(a) sobre as principais movimentações da área. <br /><br /> Boa leitura!</p>

                            <a href="">Saiba mais</a>
                        </div>
                    </div>
                </section>
            {/* Section revista */}

            {/* Clientes */}
                <section className="clientes">

                </section>
            {/* Clientes */}
            <Footer />
        </>
    )
}