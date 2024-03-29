import Header from "../components/Header"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

// baners videos youtube
import JCPimg from '/Thumb_Youtube_Live_JCP.png'
import reforma from '/Thumb_Youtube_Live_Reforma_Tributaria.png'
import subvencao from '/Thumb_Youtube_Live_Subvencao.png'
import sobre from '/Thumb_Youtube_Sobre_TaxMap.png'


import 'swiper/css/effect-coverflow';

import clientes from '/clientes/Imagem_Servicos_Planejamento_Tributario_Box.png'

import './home.css';

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow, Mousewheel, Keyboard } from 'swiper/modules';

import BackToTopButton from "../components/BackToTopButton";
import TaxChat from "../components/TaxChat";

import Footer from "../components/Footer";

import Clientes from "../components/Clientes";



// imagens 

import imgbanner001 from '/Imagem_Banner_1_Home_Homem_Sorrindo_Com_Tablet.png'
import imgbanner002 from '/Imagem_Banner_2_Home_Reforma_Tributaria_Planalto.png'
import imgbanner003 from '/Imagem_Banner_3_Home_Homem_Segurando_Tablet_Com_Numeros_No_Ar.png'
import logoGPTW from  '/Logo_gptw.png'
import imgNotebook from '/Imagem_Notebook_Com_Informativo_Na_Tela.png'
import revista from '/Imagem_Informativo_Mensal_Dezembro_2023_TaxMap.png'
import teste from '/teste_centralizar.png'

import JivoChat from "../components/JivoChat";
import { Link } from "react-router-dom";

export default function Home() {

        const [showModal, setShowModal] = useState(false);
        const [selectedImage, setSelectedImage] = useState(null);
    
        const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
        };
    
        const closeModal = () => {
        setSelectedImage(null);
        setShowModal(false);
        };
      

        const progressCircle = useRef(null);
        const progressContent = useRef(null);
        const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        };

        const [swiperRef, setSwiperRef] = useState(null);

    return(
        <>
        {/* <JivoChat /> */}
        <Header />
            <BackToTopButton />
            <TaxChat />
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
                loop={true}
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
                            <div className="texto-slide-one-principal">
                                {/* <img src={logoGPTW} alt="" className="logo-gptw" /> */}
                                <br />
                                <h1 className="card-one-h1">Somos os parceiros que seu negócio precisa na área tributária</h1>
                            </div>
                            <img src={teste} alt="" className="img-banner-001" />
                        </SwiperSlide>
                    {/* Slinde one */}

                    {/* Slinde two */}
                        <SwiperSlide className="slide-two">
                            <div className="slide-content">
                            <div className="texto-slide-one"> 
                                <h1>Reforma Tributária: <br /> Live + Resumo Exclusivo</h1>
                                <p>Aqui na TaxMap, desenvolvemos 3 conteúdos especiais e gratuitos sobre a Reforma Tributária para apoiar a sua empresa! </p>
                                <a href="https://forms.office.com/pages/responsepage.aspx?id=lG4-94i7tk-C2JeQI5RvtfDQNRLPvl1Jj-F9cPawVUNUQlNOOUk3SzdXT1dUSjFPTTBGV1pBSlBaSS4u" target="_blank" rel="noopener noreferrer" className="btn-reforma">Inscreva-se para acessar</a>
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
                                <p>Oferecemos soluções tecnológicas avançadas e customizadas para aprimorar a rotina fiscal da sua empresa</p>
                                <Link to="/site_taxmap/pages/Tax_technology" className="btn-reforma">Saiba mais</Link>
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
                <h1>Conheça os nossos serviços</h1>
                    <div className="serv_card_flex">
                        <div className="cards-servicos planejamento">
                        <div class="cardBox">
                            <div class="card">
                                <div class="h4">Planejamento Tributário <br /> <span>+</span> </div>
                            
                                <div class="content">
                                <div class="h3">Planejamento Tributário</div>
                                <p>Prática fundamental para qualquer empresa ou empreendedor que deseja otimizar sua carga tributária de forma legal e manter a saúde financeira de seu negócio.</p>
                                <Link to="/site_taxmap/pages/Planejamento_tributario">Clique aqui e saiba mais</Link>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="cards-servicos planejamento">
                        <div class="cardBox">
                                <div class="card">
                                    <div class="h4">Compliance Tributário<br /> <span>+</span> </div>
                                
                                    <div class="content">
                                    <div class="h3">Compliance Tributário</div>
                                    <p>Conjunto de diretrizes que as empresas devem seguir para garantir conformidade com as normas fiscais.</p>
                                    <Link to="/site_taxmap/pages/Compliance_tributario">Clique aqui e saiba mais</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cards-servicos planejamento">
                        <div class="cardBox">
                                <div class="card">
                                    <div class="h4">Consultoria Tributária <br /> <span>+</span> </div>
                                
                                    <div class="content">
                                    <div class="h3">Consultoria Tributária</div>
                                    <p>Assessoria especializada que abrange a análise de legislação e jurisprudência, avaliação dos riscos envolvidos e formulação de recomendações para orientar a empresa em circunstâncias particulares.</p>
                                    <Link to="/site_taxmap/pages/Consultoria_tributaria">Clique aqui e saiba mais</Link>
                                    </div>
                                </div>
                        </div>
                        </div>

                        <div className="cards-servicos planejamento">
                        <div class="cardBox">
                                <div class="card">
                                    <div class="h4">Tax Technology <br /> <span>+</span> </div>
                                
                                    <div class="content">
                                    <div class="h3">Tax Technology</div>
                                    <p>Abordagem inovadora que incorpora ferramentas inteligentes, automação e análise de dados, visando simplificar as operações fiscais da sua empresa</p>
                                    <Link to="/site_taxmap/pages/Tax_technology">Clique aqui e saiba mais</Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>


                    <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={2}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                        type: 'bullets',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="Swiper-servicos">


                        {/* <SwiperSlide className="cards-servicos planejamento">

                                <div class="cardBox">
                                <div class="card">
                                    <div class="h4">Planejamento Tributário <br /> <span>+</span> </div>
                                
                                    <div class="content">
                                    <div class="h3">Planejamento Tributário</div>
                                    <p>Prática fundamental para qualquer empresa ou empreendedor que deseja otimizar sua carga tributária de forma legal e manter a saúde financeira de seu negócio.</p>
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
                                    <p>Conjunto de diretrizes que as empresas devem seguir para garantir conformidade com as normas fiscais.</p>
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
                                    <p>Assessoria especializada que abrange a análise de legislação e jurisprudência, avaliação dos riscos envolvidos e formulação de recomendações para orientar a empresa em circunstâncias particulares.</p>
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
                                    <p>Abordagem inovadora que incorpora ferramentas inteligentes, automação e análise de dados, visando simplificar as operações fiscais da sua empresa.</p>
                                    <a>Clique aqui e saiba mais</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>   */}
                    </Swiper>
            </section>
            {/* Servicos */}

            {/* materiais */}
            <section className="banner-materias">
                    <img src={imgNotebook} alt="" className="img-materiais"/>
                    <h2>Aproveite os materiais tributários gratuitos que desenvolvemos para o setor</h2>
            </section>
            {/* materiais */}

            {/* section youtube */}
                <section className="section-youtube">

                    <h2>Assista aos nossos vídeos exclusivos</h2>
                    <div className="section-youtube-div">
                        <div className="iframes-videos">
                    
      {/* Imagens com links ou botões para abrir o modal */}
      <div className="image-container">

        <div className="video-flex">
            <img
            src={JCPimg}
            alt="Imagem 1"
            onClick={() => openModal("https://example.com/image1.jpg")}
            className="principal-video"
            />

            <div className="display-block">
                <img
                src={reforma}
                alt="Imagem 2"
                onClick={() => openModal("")}
                className="videos-secundarios"
                />
                <img
                src={subvencao}
                alt="Imagem 2"
                onClick={() => openModal("")}
                className="videos-secundarios"
                />
                <img
                src={sobre}
                alt="Imagem 2"
                onClick={() => openModal("")}
                className="videos-secundarios"
                />
            </div>
        </div>
        {/* Adicione mais imagens conforme necessário */}
      </div>

      {/* Modal */}
        {showModal && (
            <div className="modal-overlay">
            <div className="modal-video">
                {/* Botão ou link para fechar o modal */}
                <button className="close-button-video" onClick={closeModal}>✖</button>
                <iframe src="https://www.youtube.com/embed/H02iYCvF7CU?si=Top61moY63BJtuol" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="iframe-principal"></iframe>
                
            </div>
            </div>
        )}
                        </div>
                    </div>

                </section>       
            {/* section youtube */}
            
            {/* Section revista */}
                <section className="revista-online">
                    <h1>Mantenha-se informado com as principais notícias e artigos do universo tributário</h1>

                    <div className="revista-div-flex">
                        <img src={revista} alt="" />
                    
                        <div className="revista-div-texto">
                            <h2>Informativo Mensal</h2>
                            <p>Este é um compilado exclusivo que desenvolvemos com as atualizações do universo tributário, para você se manter informado(a) sobre as principais movimentações da área. <br /><br /> Boa leitura!</p>

                            <a href="https://heyzine.com/flip-book/informativo-taxmap-fevereiro-2024" target="_blank" rel="noopener noreferrer">Saiba mais</a>
                        </div>
                    </div>
                </section>
            {/* Section revista */}

            {/* Clientes */}
                <section className="clientes">
                        <Clientes />
                </section>
            {/* Clientes */}
            <Footer />
        </>
    )
}