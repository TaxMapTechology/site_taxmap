import Header from "../components/Header"
import './Institucional.css'


import Footer from "../components/Footer"


// Imagens
import imgEquipe from '/Imagem_Banner_Pagina_Institucional_TaxMap_Equipe_Reunida.png'
import imgSocios from '/socios.png'
import imgPessoas from '/Imagem_Site_TaxMap_Pessoas_Andando.png'

import logoAntigo from '/Logo_antigo.png'
import imgLoc from '/Imagem_icone_localizacao.png'
import imgEquipeTimeLine from '/Imagem_icone_equipe.png'
import logo from '/logo-color.jpg.png'
import gptw from '/SELO_GPTW.png'

import iconeCheck from '/Imagem_icone_check.png'
import iconCoracao from '/Imagem_icone_coracao.png'
import iconEstrela from '/Imagem_icone_estrela.png'
import iconTecnologia from '/Imagem_icone_tecnologia.png'
import iconTrofeu from '/Imagem_icone_trofeu.png'
import iconOlho from '/Imagem_icone_olho.png'

export default function institucional(){
    return(
        <>
            <Header />

            <section className="banner-institucional">
                <div>
                    <h1>Uma década dedicada a tornar mais simples e segura a gestão tributária das empresas.</h1>
                </div>
                <div>
                    <img src={imgEquipe} alt="" />
                </div>
               
            </section>
            <p className="institucional-p">Esse objetivo é o que move a TaxMap. Trabalhamos com alto conhecimento e rapidez para simplificar a complexidade tributária, eliminar a burocracia e diminuir riscos para os nossos clientes.</p>

            <section className="institucional-socios">
                <div className="h-socios">
                    <h1>Quem somos</h1>
                    <p>
                    A TaxMap foi fundada há 10 anos por Edson Batista. Como contador, possui mais de 25 anos de experiência em tributos diretos e indiretos e é especialista em planejamento tributário nos segmentos de indústria, combustíveis e bioenergia. Atuou boa parte deste período como gestor de planejamento tributário em grandes empresas como Shell Brasil, Brenco/Odebrecht e Coca-Cola/FEMSA. 
                    </p>
                    <p>
                    Guilherme Braga, sócio da TaxMap, é graduado em Direito e em Ciências Contábeis e é pós-graduando em Direito Financeiro e Tributário pela Universidade do Estado do Rio de Janeiro (UERJ). Ex-Big4, com forte bagagem em Tax Compliance, reorganizações societárias e planejamento tributário. Certificado em Tributação sobre Energia Elétrica, Indústria de Petróleo e Gás e Reorganizações Societárias.
                    </p>
                </div>
                <div>
                    <img src={imgSocios} alt=""/>
                    <p className="desc-img-socios">Edson Batista (esquerda) e Guilherme Braga (direita), no encontro para celebrar o reconhecimento de Great Place To Work da TaxMap.</p>
                </div>
            </section>

            {/* video institucional */}

            <section className="Video-institucional">
                <iframe width="660" height="415" src="https://www.youtube.com/embed/CDtCrM2d4xQ?si=3HgmQL6kmsZO7B7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>

            {/* video institucional */}

            {/* Dedicação */}
            <section className="dedicacao">
                <h1>10 anos de dedicação e comprometimento</h1>
            </section>
            {/* Dedicação */}

            <img src={imgPessoas} alt="" className="imgPessoas"/>

            {/* Linha do tempo */}
            <section className="linha-do-tempo">
                <div className="ano-2014">
                    <img src={logoAntigo} alt="" className="img-2014"/>
                    <h1>2014</h1>
                    <div className="bullet-line">
                        <div className="bullet"></div>
                        <hr />
                    </div>
                    <p>Focamos no <b>desenvolvimento tributário</b> de empresas <b>Middle Market</b>.</p>
                </div>

                <div className="ano-2014">
                    <img src={imgLoc} alt="" className="img-ano-2016"/>
                    <h1>2016</h1>
                    <div className="bullet-line">
                        <div className="bullet"></div>
                        <hr />
                    </div>
                    <p><b>Lançamos dois escritórios</b>, um no Rio de Janeiro e outro em São Paulo, e começamos a atender <b>Grandes Empresas</b>.</p>
                </div>

                <div className="ano-2014">
                    <img src={imgEquipeTimeLine} alt="" className="img-ano-2020"/>
                    <h1>2020</h1>
                    <div className="bullet-line">
                        <div className="bullet"></div>
                        <hr />
                    </div>
                    <p>Passamos a diversificar a equipe para desenvolver soluções tecnológicas customizadas.</p>
                </div>

                <div className="ano-2014">
                    <img src={logo} alt="" className="img-ano-2021"/>
                    <h1>2021</h1>
                    <div className="bullet-line">
                        <div className="bullet"></div>
                        <hr />
                    </div>
                    <p>Realizamos uma atualização significativa na nossa identidade visual.</p>
                </div>

                <div className="ano-2014">
                    <img src={gptw} alt="" className="img-ano-2023"/>
                    <h1>2023</h1>
                    <div className="bullet-line">
                        <div className="bullet"></div>
                        {/* <hr /> */}
                    </div>
                    <p>Conquistamos o reconhecimento exclusivo do segmento como “Great Place To Work” e realizamos uma expansão na nossa área de tecnologia.</p>
                </div>
            </section>            
             {/* Linha do tempo */}

             {/* Nosso valores */}
             <h1 className="nosso-valores-h1">Nossos valores</h1>
            <section className="nossos-valores">
                
                <div>
                    <div className="icon-check-div">
                        <img src={iconeCheck} alt="" className="icone-check"/>
                        </div>
                    <div className="card-valores">
                        <h1 className="comprometimento-h1">Comprometimento</h1>
                        <p className="comprimetimento-p">Seguimos os prazos acordados com a rapidez que o seu negócio precisa.</p>
                    </div>
                </div>

                <div>
                    <div className="icon-coracao-div">
                        <img src={iconCoracao} alt="" className="icon-coracao"/>
                    </div>
                    <div className="card-valores">
                        <h1 className="reputacao-h1">Reputação</h1>
                        <p className="reputacao-p">Atuamos em conformidade com a LGPD, adotando práticas éticas e de compliance para preservar a confiança do seu e do nosso negócio.</p>
                    </div>
                </div>

                <div>
                    <div className="icon-estrela-div">
                        <img src={iconEstrela} alt="" className="icon-estrela"/>
                    </div>
                    <div className="card-valores">
                        <h1 className="qualidade-h1">Qualidade</h1>
                        <p className="qualidade-p">Seguindo os prazos acordados com a rapidez que o seu negócio precisa.</p>
                    </div>
                </div>

                <div>
                    <div className="icon-tecnologia-div">
                        <img src={iconTecnologia} alt="" className="icon-tecnologia"/>
                    </div>
                    <div className="card-valores">
                        <h1 className="reputacao-h1">Tecnologia</h1>
                        <p className="reputacao-p">Aplicamos tecnologia por meio de automações, análise de dados e soluções customizadas.</p>
                    </div>
                </div>

                <div>
                    <div className="icon-transparencia-div">
                    <div className="icon-transparencia-div">
                        <img src={iconOlho} alt="" className="icon-transparencia"/>
                    </div>
                    </div>
                    <div className="card-valores">
                        <h1 className="qualidade-h1">Transparência</h1>
                        <p className="qualidade-p">Operamos de forma transparente para redução de riscos e implementação de oportunidades.</p>
                    </div>
                </div>

                <div>
                    <div className="icon-trofeu-div">
                        <img src={iconTrofeu} alt="" className="icon-trofeu"/>
                    </div>
                    <div className="card-valores">
                        <h1 className="comprometimento-h1">Resultado</h1>
                        <p className="comprimetimento-p">Oferecemos conhecimento para ganho de competitividade e geração de caixa para os nossos clientes.</p>
                </div>
                </div>
            </section>

             {/* Nosso valores */}
        
            <Footer />
        </>
    )
}