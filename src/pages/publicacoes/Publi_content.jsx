import Header from "../../components/Header"
import Footer from "../../components/Footer"

import data_publi from "./data_publi"

import { CiSearch } from "react-icons/ci";

import '../../styles/Publicacoes_content.css'

export default function Publi_content() {

    return(
        <>
         <Header />
            <section className="search_Publi">
                <input type="search" name="Pesquisar publicação" className="input_search"/>
                <button className="search_btn"><CiSearch className="search"/></button>
            </section>
           {data_publi.publiData.slice(0, 1).map((item, index) => (
                <section key={item.id}>
                <p className="menu_search">Publicação ➜ {item.title}</p>
                </section>
            ))}
            
            <section className="container">
            {data_publi.publiData.slice(0, 1).map((item, index) => (
                    <div key={item.id} item={item}>
                         <img src={item.img_banner} alt="" className="img_teste" />
                        <h1 className="texto">{item.title}</h1>
                        <div className="descrição_publi">
                        <div>
                            <p className="resumo_publi">{item.resumo}</p>
                        </div>
                        <div className="dados_publi">
                            <p>Postado por: Bruno Queiroz <span>{item.autor}</span></p>
                            <p> | </p>
                            <p> Publicado em: 12/03<span>{item.data}</span></p>
                        </div>
                        </div>
                        <h1 className="h1_content">{item.title}</h1>
                        <p className="p-corpo">{item.corpo}</p>
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