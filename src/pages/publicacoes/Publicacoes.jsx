import './../../styles/publicacoes.css'
import Header from '../../components/Header'

import React, { useState } from 'react';

import confaz from '/confaz.png'
import acordao from '/publicacoes_img/acordao.png'
// import congresso from '/publicacoes_img/congresso.png'
// import stj from '/publicacoes_img/stj.png'

import resvista from '/revista_content.png'

import Footer from '../../components/Footer'

import { Link } from 'react-router-dom'

import { CiSearch } from "react-icons/ci";

import data_publi from './data_publi'

export default function Publicacoes(){

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
  
    const handleStartDateChange = (event) => {
      setStartDate(event.target.value);
    };
  
    const handleEndDateChange = (event) => {
      setEndDate(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aqui você pode fazer o que quiser com as datas selecionadas
      console.log('Data de início:', startDate);
      console.log('Data de término:', endDate);
    };

    return(
        <>
            <Header />
            <header className="header">
            <section className="section">
                <h1 className="title">Publicações TaxMap</h1>
                {/* <span className="span"><a href="/" className="a"></a> 
                <i className="fa fa_angle_double_right"> </i> 
                <a href="#" className="a active">Publicações</a></span> */}
            </section>  
            </header>

            {/* <!--BLOG SECTION--> */}
           
            <div className="blog_container">
                <div className="blog_content">
                    <div className="left_content">
                        {/* <!--CARD BEGINING--> */}
                        <div className="blog_card">
                            <Link to="/site_taxmap/pages/publicacoes/Publi_content" className="figure">
                                <img src={acordao} alt="" loading="lazy" />
                                <span className="tag span">1 JAN</span>
                            </Link>
                            <section className="span">
                            <Link to="/site_taxmap/pages/publicacoes/Publi_content" className="title a">Publicado acórdão que possibilita o creditamento de ICMS na aquisição de produtos intermediários </Link>
                                <p className="p-content">Em 11.10.2023, nos autos do EARESP nº 1.775.781/SP, a Primeira Seção, por unanimidade, deu provimento aos embargos de divergência, nos termos do voto da Sra. Ministra Relatora Regina Helena Costa...</p>
                            </section>
                        </div>
                        {/* <!--CARD ENDS-->
                        <!--CARD BEGINING--> */}

                        {data_publi.publiData.map((item, index)=>{
                                        return(
                                            <div className="blog_card">
                                                    <a href="#" className="figure">
                                                        <img src={item.img_banner} alt="imagem noticia confaz" loading="lazy" />
                                                        <span className="tag">{item.data_atual}</span>
                                                    </a>
                                                    <section className="section">
                                                        <Link to="/site_taxmap/pages/publicacoes/Publi_content" className="title">{item.title}</Link>
                                                        <p className="p-content">{item.desc}</p>
                                                    </section>
                                                </div>
                                        )
                                    })}

                        {/* <!--CARD ENDS--> */}
                    </div>
                    {/* <button className="btn1 load_btn">Load more</button> */}
                </div>

                <div className="blog_content right_content">
                    {/* <!--SEARCH COLUMN BEGINING--> */}
                    <div className="columns search_column">
                        <section className="search">
                            <form>
                                <fieldset className="fieldset">
                                    <input type="text" name="search" placeholder="Procurar artigos..." maxLength="100" Required=""/>
                                </fieldset>
                                <fieldset><button type="submit" className="btn1-search"><CiSearch />
                            <i className="fa fa_search"></i></button></fieldset>
                            </form>
                        </section>
                    </div>
                    {/* <!--SEARCH COLUMN ENDS--> */}
                    {/* <!--BOOKS COLUMN BEGINING--> */}
                    <div className="columns books">
                        <span className="title">Revista Online <a href="#" title="Explore More"><i className="fa fa_share"></i></a></span>
                        <section>
                            <div className="cards">
                            {/* <iframe
                                allowFullScreen
                                scrolling="no"
                                className="fp-iframe"
                                src="https://heyzine.com/flip-book/18b1e021bd.html"
                                style={{ border: '1px solid lightgray', width: '100%', height: '320px' }}
                            /> */}
                            
                            <h1></h1>
                            <img src={resvista} alt="imagem heyzine" className='revista_img'/>
                            </div>
                        </section>

                    </div>
                    {/* <!--BOOKS COLUMN ENDS--> */}
                    {/* <!--CATEGORIES COLUMN BEGINING--> */}
                    <div className="columns categories">
                        <span className="title">Categorias</span>
                        <section>
                            <a href="#">Reforma tributária</a>
                            <a href="#">Consultoria</a>
                            <a href="#">ICMS</a>
                            <a href="#">PIS/COFINS</a>
                            <a href="#">ISS</a>
                            <a href="#">Tax Technology</a>
                            <a href="#">Tributos</a>
                            <a href="#">Atos Normativos</a>
                            <a href="#">Decisões Administrativas e Judiciais</a>
                            <a href="#">Notícias</a>
                            <a href="#">Artigos</a>
                            <a href="#">ICMS ST</a>
                            <a href="#">IPI</a>
                            <a href="#">ISS</a>
                            <a href="#">IR/CS</a>
                            <a href="#">Obrigações Acessórias</a>
                            <a href="#">Previdenciário</a>
                            <a href="#">Substituição tributária</a>
                            <a href="#">Benefícios Fiscais</a>
                            <a href="#">Compliance</a>
                            <a href="#">CARF</a>
                            <a href="#">TIT SP</a>
                        </section>
                    </div>

                    <div className="columns categories">
                        <span className="title">Filtrar por mês</span>
                        <section>
                            <a href="#">Janeiro</a>
                            <a href="#">Fevereiro</a>
                            <a href="#">Março</a>
                            <a href="#">Abril</a>
                            <a href="#">Junho</a>
                            <a href="#">Julho</a>
                            <a href="#">Agosto</a>
                            <a href="#">Setembro</a>
                            <a href="#">Outubro</a>
                            <a href="#">Novembro</a>
                            <a href="#">Dezembro</a>
                        </section>
                    </div>

                    <div className="columns categories">
                        <span className="title">Filtrar por ano ou período</span>
                        <section>
                            {/* <a href="#">2   020</a> */}
                            {/* <input id="date" type="date" className='input-date'/> */}

                            {/* teste */}
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="startDate">Data de Início: </label>
                                    <input
                                    id="startDate"
                                    type="date"
                                    className="input-date"
                                    value={startDate}
                                    onChange={handleStartDateChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="endDate">Data de Término: </label>
                                    <input
                                    id="endDate"
                                    type="date"
                                    className="input-date"
                                    value={endDate}
                                    onChange={handleEndDateChange}
                                    />
                                </div>
                                <button type="submit" className='input-date'>Pesquisar notícia</button>
                                </form>
                            {/* teste */}
                        </section>
                    </div>

                    {/* <!--CATEGORIES COLUMN ENDS--> */}
                    {/* <!--POSTS COLUMN BEGINING--> */}
                    {/* <div className="columns posts">
                        <span className="title">Postagens antigas <a href="#" title="Explore More"><i
                                    className="fa fa_share"></i></a></span>
                        <section>
                            <a href="#"><img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" loading="lazy" />
                                <p className="p">Noticia antiga. </p>
                            </a>
                            <a href="#"><img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" loading="lazy" />
                                <p className="p">Noticia antiga. </p>
                            </a>
                            <a href="#"><img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" loading="lazy" />
                                <p className="p">Noticia antiga. </p>
                            </a>
                        </section>
                    </div> */}
        
                    {/* <!--SOCIAL MEDIA ICONS BEGINING--> */}
                    <div className="columns social_icons">
                        <a href="#" title="Instagram"><i className="fa fa_instagram"></i></a>
                        <a href="#" title="Youtube"><i className="fa fa_youtube"></i></a>
                        <a href="#" title="Whatsapp"><i className="fa fa_whatsapp"></i></a>
                    </div>
                    {/* <!--SOCIAL MEDIA ICONS ENDS--> */}
                    
                </div>
            </div>

            <Footer />
        </>
    )
}