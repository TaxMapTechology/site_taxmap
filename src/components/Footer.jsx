import "./footer.css"

import { FaSquareInstagram, FaLinkedin, FaSquareYoutube} from "react-icons/fa6"
import { IoMenuOutline } from "react-icons/io5";

import logo from '/logo-color-neg.png'
import selo from '/SELO_GPTW.png'
import { Link } from "react-router-dom";


export default function Footer(){
    return(
        <>
                    <div className="pg_footer">
            <footer className="footer">
            <svg className="footer_wave_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                {/* <path className={styles.footer_wave_path} d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path> */}
            </svg>
            <div className={"footer_content"}>
                <div className="footer_content_column">
                <div className="footer_logo">
                    <a className="footer_logo_link" href="#">
                    <span className="hidden_link_text">LOGO</span>
                    <h1 className="logo-footer"><img src={logo} alt="logo taxmap footer" className="logo-footer-img"/></h1>
                    </a>
                </div>
                <div className="footer_menu">
                    <h2 className="footer_menu_name"> Funcionamento</h2>
                    <ul id="menu_get_started" className="footer_menu_list">
                    <li className="menu_item menu_item_type_post_type menu_item_object_product">
                        <a href="#">Segunda à Sexta</a>
                    </li>
                    <li className="menu_item menu_item_type_post_type styles.menu_item_object_product">
                        <a href="#">9h às 18h</a>
                    </li>
                    <h1><img src={selo} alt="" className="gptw"/></h1>
                    
                    {/* <li className="menu-item menu-item-type-post_type menu-item-object-product">
                        <a href="#">Installation</a>
                    </li> */}                    
                    </ul>
                </div>
                </div>
                <div className="footer_content_column">
                <div className="footer_menu">
                    <h2 className="footer_menu_name"> Unidades</h2>
                    <ul id="menu-company" className="footer_menu_list">
                    <li className="menu_item menu_item_type_post_type menu_item_object_page">
                        <a href="#">SP: Rua Gomes de Carvalho, 1069, Sala 83 – Vila Olímpia, São Paulo/SP</a>
                    </li>
                    <br />
                    <li className="menu_item menu_item_type_taxonomy menu_item_object_category">
                        <a href="#">RJ: Av. José Silva de Azevedo Neto, 200, Bloco 04, Sala 0104 - Barra da Tijuca, Rio de Janeiro/RJ</a>
                        
                    </li>
                    {/* <li className="menu-item menu-item-type-post_type menu-item-object-page">
                        <a href="#">Carreira</a>
                    </li> */}
                    </ul>
                </div>
                <div className="footer_menu">
                    <h2 className="footer_menu_name"> Legal</h2>
                    <ul id="menu-legal" className="footer_menu_list">
                    <li className="menu_item menu_item_type_post_type menu_item_object_page menu_item_privacy_policy menu_item_170434">
                        <Link to="/site_taxmap/pages/Politica_privacidade">Política de Privacidade e Termos de Uso</Link>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="footer_content_column">
                <div className="footer_menu">
                    <h2 className="footer_menu_name"> Menu</h2>
                    <ul id="menu-quick-links" className="footer_menu_list">
                    <li className="menu_item menu_item_type_custom menu_item_object_custom">
                        <a target="_blank" rel="noopener noreferrer" href="#">Institucional</a>
                    </li>
                    <li className="menu_item menu_item_type_custom menu_item_object_custom">
                        <a target="_blank" rel="noopener noreferrer" href="#">O que fazemos</a>
                    </li>
                    <li className="menu_item menu_item_type_post_type menu_item_object_page">
                        <a href="#">Publicações</a>
                    </li>
                    <li className="menu_item menu_item_type_post_type_archive menu_item_object_customer">
                        <a href="#">Contato</a></li>
                    <li className="menu_item menu_item_type_post_type menu_item_object_page">
                        <a href="#">Carreira</a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="footer_content_column">
                <div className="footer_call_to_action">
                    <h2 className="footer_call_to_action_title"> Newsletter</h2>
                    {/* <p className="footer-call-to-action-description"> Have a support question?</p> */}
                    <a className="footer_call_to_action_button button" href="#" target="_self"> Cadastrar </a>
                </div>
                <div className="footer_call_to_action">
                    <h2 className="footer_call_to_action_title"> Contato</h2>
                    <p className="footer_call_to_action_link_wrapper"> <a className="footer_call_to_action_link" href="tel:0124-64XXXX" target="_self"> SP: +55 11 3459 - 2518 </a></p>
                    <p className="footer_call_to_action_link_wrapper"> <a className="footer_call_to_action_link" href="tel:0124-64XXXX" target="_self"> RJ: +55 21 3747 - 1600 </a></p>
                    <p className="footer_call_o_action_link_wrappera"> <a className="footer_call_to_action_link" href="tel:0124-64XXXX" target="_self"> contato@taxmaptributos.com.br </a></p>

                    <div className="redes_div">
                        <a href=""><FaSquareYoutube className="redes"/></a>
                        <a href=""><FaLinkedin className="redes" /></a>
                        <a href=""><FaSquareInstagram className="redes"/></a>
                                </div>

                    {/* */}
                    {/* <a href="https://www.linkedin.com/company/taxmap-tributos/" target='_blank' className='redes link'><img src={linkedin} alt="icon insta" id='redesLinks' /></a> */}
                            {/* <a href="https://www.youtube.com/@TaxMapTributos" target='_blank' className='redes'><img src={youtube} alt="icon insta" id='redesYout' /></a> */}
                            {/* <a href="https://www.instagram.com/taxmap_consultoria/" target='_blank'  className='redes'><img src={insta} alt="icon insta" id='redesInsta' /></a>  */}

                    <img src="tes.png" alt="" />
                </div>
                </div>
                <div className="footer_social_links"> <svg className="footer_social_amoeba_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
                </svg>
                </div>
            </div>
            <div className="footer_copyright">
                <div className="footer_copyright_wrapper">
                <p className="footer_copyright_text">
                    <a className="footer_copyright_link" href="Main" target="_self"> © 2023 - TaxMap Tributos - Todos os direitos reservados. </a>
                </p>
                </div>
            </div>
            </footer>
        </div>
                </>
    )
}