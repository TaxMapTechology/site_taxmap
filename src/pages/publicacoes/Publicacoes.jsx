import './../../styles/publicacoes.css'
import Header from '../../components/Header'

import confaz from '/confaz.png'

import { Link } from 'react-router-dom'

export default function Publicacoes(){
    return(
        <>
            <Header />
            <header className="header">
            <section className="section">
                <h1 className="title">Publicações TaxMap</h1>
                <span className="span"><a href="/" className="a">Home ➜</a> 
                <i className="fa fa_angle_double_right"> </i> 
                <a href="#" className="a active">Publicações</a></span>
            </section>  
            </header>

            {/* <!--BLOG SECTION--> */}
            <div className="blog_container">
                <div className="blog_content">
                    <div className="left_content">
                        {/* <!--CARD BEGINING--> */}
                        <div className="blog_card">
                            <a href="" className="figure">
                                <img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" loading="lazy" />
                                <span className="tag span">1 JAN</span>
                            </a>
                            <section className="span">
                            <Link to="" className="title a">Publicado acórdão que possibilita o creditamento de ICMS na aquisição de produtos intermediários </Link>
                                <p className="p">Em 11.10.2023, nos autos do EARESP nº 1.775.781/SP, a Primeira Seção, por unanimidade, deu provimento aos embargos de divergência, nos termos do voto da Sra. Ministra Relatora Regina Helena Costa...</p>
                            </section>
                        </div>
                        {/* <!--CARD ENDS-->
                        <!--CARD BEGINING--> */}
                        <div className="blog_card">
                            <a href="#" className="figure">
                                <img src={confaz} alt="" loading="lazy" />
                                <span className="tag">4 JAN</span>
                            </a>
                            <section className="section">
                                <a href="" className="title">Confaz publica novo convênio para regulamentar os efeitos da ADC 49 </a>
                                <p className="p">O STF, por meio da ADC 49, decidiu que não incide ICMS nas operações interestaduais entre estabelecimentos do mesmo titular. Em sede de embargos de declaração, ficou consignado pela Corte que os Estados podem transferir os créditos gerados nessas operações... </p>
                            </section>
                        </div>
                        {/* <!--CARD ENDS-->
                        <!--CARD BEGINING--> */}
                        <div className="blog_card">
                            <a href="" className="figure">
                                <img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" loading="lazy" />
                                <span className="tag">06 Dez</span>
                            </a>
                            <section>
                                <a href="#" className="title">Congresso aprova lei complementar para dispor sobre ICMS nas transferências </a>
                                <p className="p">A Câmara dos Deputados aprovou nesta terça-feira (5) projeto de lei complementar que inclui decisão do Supremo Tribunal Federal (STF) na legislação para dispor sobre o pagamento do ICMS a transferência de produtos entre estabelecimentos de uma mesma empresa. A matéria será enviada à sanção presidencial.</p>
                            </section>
                        </div>
                        {/* <!--CARD ENDS-->
                        <!--CARD BEGINING--> */}
                        <div className="blog_card">
                            <a href="" className="figure">
                                <img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" loading="lazy" />
                                <span className="tag">13 Dez</span>
                            </a>
                            <section>
                                <a href="#" className="title">STJ decide que ICMS-ST não compõe a base de cálculo de PIS e Cofins</a>
                                <p className="p">Essencialmente, o STJ aplicou ao caso a mesma razão de decidir que o Supremo Tribunal Federal usou no Tema 69 da repercussão geral, onde foi fixada a chamada “tese do século... </p>
                            </section>
                        </div>
                        {/* <!--CARD ENDS-->
                        <!--CARD BEGINING--> */}
                        <div className="blog_card">
                            <a href="" className="figure">
                                <img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" loading="lazy" />
                                <span className="tag">10 JAN</span>
                            </a>
                            <section>
                                <a href="#" className="title">Titulo da publicação...</a>
                                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat... </p>
                            </section>
                        </div>
                        {/* <!--CARD ENDS-->
                        <!--CARD BEGINING--> */}
                        <div className="blog_card">
                            <a href="#" className="figure">
                                <img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" loading="lazy" />
                                <span className="tag">15 JAN</span>
                            </a>
                            <section>
                                <a href="#" className="title">Titulo da publicação...</a>
                                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat... </p>
                            </section>
                        </div>
                        {/* <!--CARD ENDS-->
                        <!--CARD BEGINING--> */}
                        <div className="blog_card">
                            <a href="#" className="figure">
                                <img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" loading="lazy" />
                                <span className="tag">15 JAN</span>
                            </a>
                            <section>
                                <a href="" className="title">Titulo da publicação...</a>
                                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat... </p>
                            </section>
                        </div>
                        {/* <!--CARD ENDS--> */}
                    </div>
                    <button className="btn1 load_btn">Load more</button>
                </div>

                <div className="blog_content right_content">
                    {/* <!--SEARCH COLUMN BEGINING--> */}
                    <div className="columns search_column">
                        <section className="search">
                            <form>
                                <fieldset className="fieldset">
                                    <input type="text" name="search" placeholder="Search..." maxLength="100" Required=""/>
                                </fieldset>
                                <fieldset><button type="submit" className="btn1"><i className="fa fa_search"></i></button></fieldset>
                            </form>
                        </section>
                    </div>
                    {/* <!--SEARCH COLUMN ENDS--> */}
                    {/* <!--BOOKS COLUMN BEGINING--> */}
                    <div className="columns books">
                        <span className="title">Revista Online <a href="#" title="Explore More"><i
                                    className="fa fa_share"></i></a></span>
                        <section>
                            <div className="cards">
                            </div>
                        </section>
                    </div>
                    {/* <!--BOOKS COLUMN ENDS--> */}
                    {/* <!--CATEGORIES COLUMN BEGINING--> */}
                    <div className="columns categories">
                        <span className="title">Categorias</span>
                        <section>
                            <a href="#">Reforma tributária</a>
                            <a href="#">Cosultoria</a>
                            <a href="#">ICMS</a>
                            <a href="#">PIS/COFINS</a>
                            <a href="#">ISS</a>
                            <a href="#">Tax Technology</a>
                            <a href="#">Tributos</a>
                        </section>
                    </div>

                    <div className="columns categories">
                        <span className="title">Filtrar por mês</span>
                        <section>
                            <a href="#">Janeiro</a>
                            <a href="#">fevereiro</a>
                            <a href="#">Março</a>
                            <a href="#">Abril</a>
                            <a href="#">Junho</a>
                            <a href="#">Julho</a>
                        </section>
                    </div>

                    {/* <!--CATEGORIES COLUMN ENDS--> */}
                    {/* <!--POSTS COLUMN BEGINING--> */}
                    <div className="columns posts">
                        <span className="title">Postagens antigas <a href="#" title="Explore More"><i
                                    className="fa fa_share"></i></a></span>
                        <section>
                            <a href="#"><img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" loading="lazy" />
                                <p>Noticia antiga. </p>
                            </a>
                            <a href="#"><img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" loading="lazy" />
                                <p className="p">Noticia antiga. </p>
                            </a>
                            <a href="#"><img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" loading="lazy" />
                                <p className="p">Noticia antiga. </p>
                            </a>
                        </section>
                    </div>
        
                    {/* <!--SOCIAL MEDIA ICONS BEGINING--> */}
                    <div className="columns social_icons">
                        <a href="#" title="Facebook"><i className="fa fa_facebook"></i></a>
                        <a href="#" title="Instagram"><i className="fa fa_instagram"></i></a>
                        <a href="#" title="Youtube"><i className="fa fa_youtube"></i></a>
                        <a href="#" title="Whatsapp"><i className="fa fa_whatsapp"></i></a>
                        <a href="#" title="Telegram"><i className="fa fa_telegram"></i></a>
                    </div>
                    {/* <!--SOCIAL MEDIA ICONS ENDS--> */}
                </div>
            </div>
        </>
    )
}