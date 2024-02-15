import Header from "../components/Header"
import Footer from "../components/Footer"

import bannerContato from '/contato_banner.jpg'

// import bannerContanto from ''

import './../styles/Contato.css'

export default function Contato() {
    return(
        <>
        <Header />
             <div className="contato_main">
                <section className="Banner_contact">
                    <img src={bannerContato} alt="pessoa segurando cafe e celular" className="contato_banner_img" />
                </section>

                {/* Section Contato */}

                <section className="contact">
                    <div className="Localização card_contato">
                        {/* <img src={IconHome} alt="icone Home" className="img_contato" /> */}
                        <h1 className="h1_contato">Localização</h1>
                        <p>SP: Rua Gomes Carvalho, 1069, Sala 83 – Vila Olímpia, São Paulo/SP</p>
                        <p>RJ: Av. José Silva de Azevedo Neto, 200, bloco 04, sala 0104 – Barra da Tijuca, Rio de Janeiro/RJ</p>
                    </div>

                    <div className="Telefone card_contato">
                        {/* <img src={IconTelefone} alt="icone telefone" className="img_contato" /> */}
                        <h1 className="h1_contato">Telefone</h1>
                        <p>SP: + 55 11 3459 – 2518</p>
                        <p>RJ: + 55 21 3747 – 1600</p>
                    </div>

                    <div className="Whatsapp card_contato">
                        {/* <img src={IconWhatsapp} alt="icone whatsapp" className= "img_contato" /> */}
                        <h1 className="h1_contato">WhatsApp</h1>
                        <p>55 11 91706-5688</p>
                    </div>

                    <div className="Email card_contato">
                        {/* <img src={IconEmail} alt="icone e-mail" className= "img_contato" /> */}
                        <h1 className="h1_contato">E-mail</h1>
                        <p>contato@taxmaptributos.com.br</p>
                    </div>
                </section>

                {/* Forms de contato */}

                <section className="Forms_contato">
                    <h1 className="h1_forms_contato">Entre em contato</h1>
                    <hr className="hr"/>

                    {/* Inputs forms */}
                    
                    <form action="" className="forms">
                        <div className="input_forms">
                            <div className="s_forms">
                                <input type="text" name="Nome" placeholder="Nome" className="input_text"/>
                                <br />
                                <input type="text" name="Nome" placeholder="E-mail" className="input_text"/>
                                <br />
                                <input type="text" name="Nome" placeholder="Telefone" className="input_text"/>
                                <br />
                                <input type="text" name="Nome" placeholder="Assunto" className="input_text"/>
                            </div>
                            <div className="text_area_forms">
                                <textarea name="" id="" className="text_area" placeholder="Sua Mensagem"></textarea>
                            </div>
                        </div>
                        <div className="btn_div">
                            <button className="btn">Enviar</button>
                        </div>  
                    </form>
                    
                </section>

                {/* Mapas com endereços taxmap */}
                <section className="Maps">

                    {/* SP */}
                    <div className="MapsFrame">
                        <h1 className="h1_Maps">São Paulo</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7312.3468781883075!2d-46.683748!3d-23.598112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574e985e7025%3A0x77ce8383a38a8cd6!2sR.%20Gomes%20de%20Carvalho%2C%201069%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004547-004!5e0!3m2!1spt-BR!2sbr!4v1699875883250!5m2!1spt-BR!2sbr" width="700" height="450" Style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="mapsGoogle"></iframe>
                    </div>


                    {/* RJ */}
                    <div className="MapsFrame">
                        <h1 className="h1_Maps">Rio de Janeiro</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7350.580272675376!2d-43.177006!3d-22.902667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5f272ca6f1%3A0x22c0656f71ebab3b!2sR.%20da%20Quitanda%2C%2086%20-%202%C2%BA%20andar%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020091-005!5e0!3m2!1spt-BR!2sbr!4v1699875848407!5m2!1spt-BR!2sbr" width="700" height="450" Style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="mapsGoogle"></iframe>
                    </div>

                </section>

                <Footer />
            </div>
        </>
    )
}