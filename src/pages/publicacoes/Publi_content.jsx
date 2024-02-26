import Header from "../../components/Header"
import Footer from "../../components/Footer"

import data_publi from "./data_publi"

export default function Publi_content() {
    return(
        <>
         <Header />
            <section className="search_Publi">
                <input type="search" name="Pesquisar publicação" className="input_search"/>
                <button className="search_btn"><img src="" alt="imagima search" className="searc_img" /></button>
            </section>
            <section>
                <p className="menu_search">Home ➜ Publicações</p>
            </section>

            <section className="container">
                {data_publi.publiData.map((item, index) => (
                    <div key={index}>
                         <img src={item.img_banner} alt="" className="img_teste" />
                        <h1 className="texto">{item.title}</h1>
                        <div className="descrição_publi">
                        <div>
                            <p className="resumo_publi">{item.resumo}</p>
                        </div>
                        <div className="dados_publi">
                            <p>Posted by: <span>{item.author}</span></p>
                            <p>|</p>
                            <p>Publicado em: <span>{item.data}</span></p>
                        </div>
                        </div>
                        <h1 className="h1_content">TITULO 1</h1>
                        <p className="styles.p">{item.corpo}</p>
                    </div>
                    ))}

            </section>


            {/* banner do meio da live */}
            <section className="{banner_taxmap_ou_newslatter">
                <img src="" alt="" />
            </section>



            {/* posts relacionados */}
            <section className="posts_relacionados">
                <h2 className="h2_relacionados">Posts relacionados</h2>

                <div className="posts_relacionados_cards">

                    <div className="card_relacionados_div">
                        <div className="card_relacionados">
                            <img src="" alt="" />
                            <p className="title_relacionados">THUMB</p>
                            
                        </div>
                            <p className="titulo_relacionados">titulo da thumb</p>   
                    </div>
                        
                    <div className="card_relacionados_div">    
                        <div className="card_relacionados">
                            <img src="" alt="" />
                            <p className="title_relacionados">THUMB</p>
                        </div>
                        <p className="titulo_relacionados">titulo da thumb</p> 
                    </div>

                    <div className="card_relacionados_div">
                        <div className="card_relacionados">
                        <img src="" alt="" />
                        <p className="title_relacionados">THUMB</p>
                        </div>
                        <p className="titulo_relacionados">titulo da thumb</p> 
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}