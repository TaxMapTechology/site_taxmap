import './../../styles/publicacoes.css'

export default function publicacoes(){
    return(
        <>
            <Header />
            <header className="header">
        <section className="section">
            <h1 className="title">Publicações TaxMap</h1>
            <span className="span"><a href="/" className="a">Home ➜</a> 
            <i className="{`${styles.fa} fa_angle_double_right"> </i> 
            <a href="#" className="a active">Publicações</a></span>
        </section>  
         </header>

    {/* <!--BLOG SECTION--> */}
    <div className="blog_container">
        <div className="blog_content">
            <div className="left_content">
                {/* <!--CARD BEGINING--> */}
                <div className="blog_card">
                    <a href="article.html" className="figure">
                        <img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" loading="lazy" />
                        <span className="tag span">1 JAN</span>
                    </a>
                    <section className="span">
                    <Link href="/Page_publi/_Publicacoes_content" className="title a">Reforma Tributária</Link>
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
                        <span className="tag">2 JAN</span>
                    </a>
                    <section className="section">
                        <a href="article.html" className="title">Titulo da publicação...</a>
                        <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat... </p>
                    </section>
                </div>
                {/* <!--CARD ENDS-->
                <!--CARD BEGINING--> */}
                <div className="blog_card">
                    <a href="article.html" className="figure">
                        <img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" loading="lazy" />
                        <span className="tag">3 JAN</span>
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
                    <a href="article.html" className="figure">
                        <img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" loading="lazy" />
                        <span className="tag">3 JAN</span>
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
                    <a href="article.html" className="figure">
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
                        <a href="article.html" className="title">Titulo da publicação...</a>
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
                        {/* <div className={`${styles.card_part} ${styles.card_part_one}`} Style="background-image: url(assets/revista.png);"></div>
                        <div className={`${styles.card_part} ${styles.card_part_two}`} Style="background-image: url(assets/revista.png);"></div>
                        <div className={`${styles.card_part} ${styles.card_part_three}`} Style="background-image: url(assets/revista.png);"></div>
                        <div className={`${styles.card_part} ${styles.card_part_four}`} Style="background-image: url(assets/revista.png);"></div> */}
                    </div>
                </section>
            </div>
            {/* <!--BOOKS COLUMN ENDS--> */}
            {/* <!--CATEGORIES COLUMN BEGINING--> */}
            <div className="columns categories">
                <span className="title">Categories</span>
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
            {/* <!--POSTS COLUMN ENDS--> */}
            {/* <!--COMMENTS COLUMN BEGINING--> */}
            {/* <div className={`${styles.columns} ${styles.comments}`}>
                <span className="title"> Comentários <a href="#" title="Explore More"><i className={`${styles.fa} ${styles.fa_share}`}></i></a></span>
                <section>
                    <marquee direction="up" scrollamount="4" onMouseOver="this.stop()" onMouseOut="this.start()"
                        className="marquee2">
                        <p>Reforma tributaria</p>
                        <p>Consultoria</p>
                        <p>Tributos</p>
                    </marquee>
                </section>
            </div> */}
            {/* <!--COMMENTS COLUMN ENDS-->
            <!--SOCIAL MEDIA ICONS BEGINING--> */}
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