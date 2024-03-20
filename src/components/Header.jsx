import './../components/Header.css'
import { FaSquareInstagram, FaLinkedin, FaSquareYoutube} from "react-icons/fa6"
import { IoMenuOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

// flag
import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiBrazilFlag } from "react-icons/gi";


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
                   <Link to="/site_taxmap"><img src={logo} alt="imagem logo taxmap" className='img-logo-principal'/></Link>
                    {/* texto do logo só aparece quando o foco está no menu */}
                    <p className='p_logo'>Planejamento & Consultoria</p>
                </div>
                {/* links menu */}
                <ul>
                    <Link to="/site_taxmap/pages/institucional"><li className='li-style'><a href="">Institucional</a></li></Link>

                    <Link to="/site_taxmap/pages/Planejamento_tributario"> <li className='li-style submenu'><a href="">O que fazemos<RiArrowDropDownLine className='dropdown'/></a>
                 
                 <ul class="submenu-content">
                        <li><a href="/site_taxmap/pages/Planejamento_tributario" className='link-submenu'>Planejamento Tributário</a></li>

                        <Link to="/site_taxmap/pages/Compliance_tributario"><li><a href="" className='link-submenu'>Compliance Tributário</a></li></Link>

                       <Link to="/site_taxmap/pages/Consultoria_tributaria"><li><a href="" className='link-submenu'>Consultoria Tributária</a></li>
                       </Link>
                        <Link to="/site_taxmap/pages/Tax_technology"><li><a href="" className='link-submenu'>Tax Technology</a></li></Link>
                    </ul>

                 </li></Link>

                   <Link to="/site_taxmap/pages/publicacoes/Publicacoes"><li className='li-style'><a href="">Publicações</a></li></Link> 

                    <Link to="/site_taxmap/pages/Contato"><li className='li-style'><a href="">Contato</a></li></Link>
                </ul>

                {/* botao para newslatter */}
                <div className='news-redes'>
                    <a href="https://forms.office.com/r/fBU7Ah59Vx" target='_blank' rel="noopener noreferrer" className='btn-newslatter'>Receba a nossa Newsletter</a>
                    
                    {/* redes sociais */}
                    <div className='redes-header'>
                        <a href="https://www.linkedin.com/company/taxmap-tributos/" target='_blank' rel="noopener noreferrer" className='icon-redes' ><FaLinkedin /></a>
                        <a href="https://www.youtube.com/@TaxMapTributos" target='_blank' rel="noopener noreferrer" className='icon-redes' ><FaSquareYoutube /></a>
                        <a href="https://www.instagram.com/taxmap_consultoria/" target='_blank' rel="noopener noreferrer" className='icon-redes'><FaSquareInstagram/></a>
                    </div>
                </div>
                <a href="" className='toggle-menu'><IoMenuOutline /></a>

                <div className='tradu'>
                    <div className="skiptranslate goog-te-gadget" dir="ltr">
                    <div id=":0.targetLanguage">
                        <select className="goog-te-combo">
                        <option value="">PT | EN</option>
                        <option value="br"><GiBrazilFlag className='brazil'/></option>
                        <option value="en"><LiaFlagUsaSolid /></option>
                        </select>
                    </div>
                    </div>
                </div>
                         
            </div>
           
        </>
    )
}