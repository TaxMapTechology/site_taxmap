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

export default function institucional(){
    return(
        <>
            <Header />

            <section className="banner-institucional">
                <div>
                    <h1>Quase uma década comprometidos em simplificar a vida tributária das empresas.</h1>
                </div>
                <div>
                    <img src={imgEquipe} alt="" />
                </div>
               
            </section>
            <p className="institucional-p">Esse objetivo é o que move a TaxMap. Trabalhamos com alto conhecimento e rapidez para simplificar a complexidade tributária, eliminar a burocracia e diminuir riscos para os nossos clientes.</p>

            <section className="institucional-socios">
                <div className="h-socios">
                    <p>
                    Há 9 anos, Edson Batista fundou a TaxMap. Como contador, possui mais de 25 anos de experiência em tributos diretos e indiretos e é especialista em planejamento tributário nos segmentos de indústria, combustíveis e bioenergia. Atuou boa parte deste período como gestor de planejamento tributário em grandes empresas como Shell Brasil, Brenco/Odebrecht e CocaCola/FEMSA. 
                    </p>
                    <p>
                    Guilherme Braga, Sócio da TaxMap, é graduado em Direito e em Ciências Contábeis, pós-graduando em Direito Financeiro e Tributário pela Universidade do Estado do Rio de Janeiro (Uerj). Ex-Big4, com forte bagagem em Tax Compliance, reorganizações societárias e planejamento tributário. Certificado em Tributação sobre Energia Elétrica, Indústria de Petróleo e Gás, e Reorganizações Societárias.
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
                    <p>Para inovar, aumentamos a equipe para <b>desenvolver soluções tecnológicas</b> e ofertar <b>soluções customizadas</b>.</p>
                </div>

                <div className="ano-2014">
                    <img src={logo} alt="" className="img-ano-2021"/>
                    <h1>2021</h1>
                    <div className="bullet-line">
                        <div className="bullet"></div>
                        <hr />
                    </div>
                    <p>Realizamos uma <b>atualização</b> importante na nossa <b>identidade visual</b>.</p>
                </div>

                <div className="ano-2014">
                    <img src={logoAntigo} alt="" className="img-2014"/>
                    <h1>2023</h1>
                    <div className="bullet-line">
                        <div className="bullet"></div>
                        {/* <hr /> */}
                    </div>
                    <p>Conquistamos o <b>reconhecimento exclusivo</b> do segmento como <b>“Great Place To Work”</b>, lançamos o <b>“Programa de novos talentos”</b> e realizamos uma <b>expansão na nossa área de tecnologia</b>. </p>
                </div>
            </section>            
             {/* Linha do tempo */}

             {/* Nosso valores */}

            <section className="nossos-valores">
                <div>
                    <img src="" alt="" />
                    <div className="card-valores">
                        <h1 className="comprometimento-h1">Comprometimento</h1>
                        <p className="comprimetimento-p">Seguindo os prazos acordados com a rapidez que o seu negócio precisa.</p>
                    </div>
                </div>

                <div>
                    <img src="" alt="" />
                    <div className="card-valores">
                        <h1 className="comprometimento-h1">Comprometimento</h1>
                        <p className="comprimetimento-p">Seguindo os prazos acordados com a rapidez que o seu negócio precisa.</p>
                    </div>
                </div>

                <div>
                    <img src="" alt="" />
                    <div className="card-valores">
                        <h1 className="comprometimento-h1">Comprometimento</h1>
                        <p className="comprimetimento-p">Seguindo os prazos acordados com a rapidez que o seu negócio precisa.</p>
                    </div>
                </div>

                <div>
                    <img src="" alt="" />
                    <div className="card-valores">
                        <h1 className="comprometimento-h1">Comprometimento</h1>
                        <p className="comprimetimento-p">Seguindo os prazos acordados com a rapidez que o seu negócio precisa.</p>
                    </div>
                </div>

                
                <div>
                    <img src="" alt="" />
                    <div className="card-valores">
                        <h1 className="comprometimento-h1">Comprometimento</h1>
                        <p className="comprimetimento-p">Seguindo os prazos acordados com a rapidez que o seu negócio precisa.</p>
                    </div>
                </div>

                <div>
                    <img src="" alt="" />
                    <div className="card-valores">
                        <h1 className="comprometimento-h1">Comprometimento</h1>
                        <p className="comprimetimento-p">Seguindo os prazos acordados com a rapidez que o seu negócio precisa.</p>
                </div>
                </div>
            </section>

             {/* Nosso valores */}
        

            <Footer />
        </>
    )
}