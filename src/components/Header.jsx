import './../components/Header.css'
import { FaSquareInstagram, FaLinkedin, FaSquareYoutube} from "react-icons/fa6"
import { IoMenuOutline } from "react-icons/io5";

import logo from '/logo-taxmap.svg'


// google translate
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    // faz a traduçao do site usandogoogle tradutor 
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement({ pageLanguage: 'pt-br' }, 'google_translate_element');
        }; 
      
        return () => {
          document.body.removeChild(script);
          delete window.googleTranslateElementInit;
        };
      }, []);
      
    return(
        <>
            <div className="menu">

                {/* logo site */}
                <div className='logo'>
                   <Link to="/site_taxmap"><img src={logo} alt="imagem logo taxmap" /></Link>
                    {/* texto do logo só aparece quando o foco está no menu */}
                    <p className='p_logo'>Planejamento e Segurança</p>
                </div>
                {/* links menu */}
                <ul>
                    <Link to="/site_taxmap/pages/institucional"><li><a href="">Institucional</a></li></Link>
                    <li><a href="/site_taxmap/pages/Planejamento_tributario">O que fazemos</a></li>
                    <li><a href="">Publicações</a></li>
                    <li><a href="">Contato</a></li>
                </ul>


                {/* botao para newslatter */}
                <div className='news-redes'>
                    <a href="" className='btn-newslatter'>Receba e nossa Newsletter</a>
                    
                    {/* redes sociais */}
                    <div className='redes-header'>
                        <a href="https://www.linkedin.com/company/taxmap-tributos/" target='_blank' className='icon-redes' ><FaLinkedin /></a>
                        <a href="" className='icon-redes' ><FaSquareYoutube /></a>
                        <a href="https://www.instagram.com/taxmap_consultoria/" target='_blank' className='icon-redes'><FaSquareInstagram/></a>
                    </div>
                </div>
                <a href="" className='toggle-menu'><IoMenuOutline /></a>
                {/* <div id="google_translate_element"></div> */}
            </div>
        </>
    )
}