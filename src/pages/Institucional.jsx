import Header from "../components/Header"
import './Institucional.css'


import Footer from "../components/Footer"


// Imagens
import imgEquipe from '/Imagem_Banner_Pagina_Institucional_TaxMap_Equipe_Reunida.png'
import imgSocios from '/socios.png'
import imgPessoas from '/Imagem_Site_TaxMap_Pessoas_Andando.png'

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



            <Footer />
        </>
    )
}