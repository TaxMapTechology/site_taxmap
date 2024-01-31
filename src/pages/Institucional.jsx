import Header from "../components/Header"
import './Institucional.css'

// Imagens
import imgEquipe from '/Imagem_Banner_Pagina_Institucional_TaxMap_Equipe_Reunida.png'

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
            <p>Esse objetivo é o que move a TaxMap. Trabalhamos com alto conhecimento e rapidez para simplificar a complexidade tributária, eliminar a burocracia e diminuir riscos para os nossos clientes. </p>
        </>
    )
}