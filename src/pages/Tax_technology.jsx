import Header from "../components/Header"
import '../styles/Planejamento_tributario.css'

import Footer from "../components/Footer";

import { Link } from 'react-router-dom';

// imagens
import img_planejamento from '/planejamento_tributário.png'
import imgPessoas from '/Imagem_Site_TaxMap_Pessoas_Andando.png'

import img_compliance from '/Imagem_Banner_Tax_Technology_Homem_Olhando_para_o_lado_Numeros_No_Ar.png'

export default function Tax_technology() {
    return(
        <>
        <Header />
        <section className="banner-planejamento-tributario">
            <div>
                <h1>Tax Technology</h1>
                <p>O Tax Technology é a aplicação de soluções tecnológicas avançadas para aprimorar os processos relacionados aos tributos. Essa abordagem inovadora integra ferramentas inteligentes, automação e análise de dados para simplificar a conformidade fiscal, reduzir riscos e promover uma gestão tributária mais eficiente e proativa.</p>
            </div>
            <div>
                <img src={img_compliance} alt="" />
            </div>
        </section>

        {/* contato */}
        <section className="contato">
            <h1>Conte com a TaxMap como sua parceira na busca por eficiência e na sua gestão fiscal.</h1>
            <Link to="" className="Link">Entrar em contato</Link>
        </section>
        {/* contato */}

        {/* atuações */}
        <section className="atuacoes-section">
            <p className="p_conheca">Conheça mais sobre as nossas atuações dentro do Compliance Tributário:</p>
            <div className="atuacoes">

                         <div className="wrap-div-list"> 
                            {/* incio primeiro card */}
                            <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-1" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-1" >
                                            <h2 className="faq_titulo">Baixador de XMLs</h2>
                                        </label>


                                        {/* conteudo dos cards */} 
                                        <div className="faq_conteudo">
                                            <p>Baixe todos os arquivos XMLs emitidos para sua empresa sem chave de acesso diretamente da Secretaria da Fazenda.</p>                                          
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                            {/* fim primeiro card */}

                            {/* inicio segundo card */}


                            <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-2" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-2" >
                                            <h2 className="faq_titulo">Facilitador de PERDCOMPs</h2>
                                        </label>


                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Controle otimizado e automatizado de compensações federais.</p>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>


                            {/* fim segundo card */}

                            {/* inicio quarto card */}

                            <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-3" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-3" >
                                            <h2 className="faq_titulo">Portaria CAT 42</h2>
                                        </label>


                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Ressarcimento do ICMS em todos seus códigos de enquadramento.</p>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>

                            {/* fim quarto card */}

                             {/* inicio quinto card */}

                             <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-4" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-4" >
                                            <h2 className="faq_titulo">E-Credac</h2>
                                        </label>


                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Recupere valores de créditos acumulados de ICMS.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* fim quinto card */}

                            </div>

                            <div className="wrap-div-list">

                            {/* inicio sexto card */}

                            <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-5" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-5" >
                                            <h2 className="faq_titulo">Ressarcimento IPI</h2>
                                        </label>


                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Recupere valores de créditos acumulados de IPI.</p>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>

                            {/* inicio quinto card */}

                            {/* inicio sexto card */}

                            <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-6" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-6" >
                                            <h2 className="faq_titulo">Ressarcimento PIS/Cofins</h2>
                                        </label>


                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Recupere e controle valores de créditos acumulados de PIS/Cofins.</p>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>

                            {/* fim sexto card */}

                             {/* inicio setimo card */}

                             <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-7" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-7" >
                                            <h2 className="faq_titulo">RTC - Revisão de Tax Compliance</h2>
                                        </label>


                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Atenda aos requisitos regulatórios e garanta Compliance fiscal.</p>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>

                            {/* fim sexto card */}
                            </div>
                        </div>
        </section>

        {/* atuações */}

        {/* dedicaçao */}

        <section className="dedicacao">
            <h1>10 anos de dedicação para simplificar a rotina fiscal das empresas.</h1>
        </section>

        {/* dedicaçao */}

        <img src={imgPessoas} alt="imagem pessoas" className="imgPessoas"/>

        {/* Como fazemos */}

        <section className="como_Fazemos">
            <h2>Como fazemos</h2>
            <p>Nossa equipe está comprometida a realizar um acompanhamento próximo em todas as etapas do projeto, sem sobrecarregar o seu time com solicitações de dados e checkpoints, no qual 90% do tempo do projeto é investimento nosso.</p>

            <div className="cards_como_fazemos">
                <div className="como_fazemos_card_one">
                    <h3 className="h3_como_fazemos">01</h3>
                    <p className="cards_title">Entendimento</p>
                    <p>das operações e avaliações dos cenários</p>
                </div>

                <div className="como_fazemos_card_one">
                    <h3 className="h3_como_fazemos">02</h3>
                    <p className="cards_title">Processamento</p>
                    <p>de dados trazendo soluções em tecnologia</p>
                </div>

                <div className="como_fazemos_card_one">
                    <h3 className="h3_como_fazemos">03</h3>
                    <p className="cards_title">Mapeamento</p>
                    <p>global de riscos e oportunidades</p>
                </div>

                {/* <div className="como_fazemos_card_one">
                    <h3 className="h3_como_fazemos">04</h3>
                    <p className="cards_title">Apresentação</p>
                    <p>rápida e objetiva dos resultados esperados</p>
                </div> */}

                {/* <div className="como_fazemos_card_one">
                    <h3 className="h3_como_fazemos">05</h3>
                    <p className="cards_title">Implementação</p>
                    <p>das operações e avaliações dos cenários</p>
                </div> */}

            </div>

        </section>

        {/* Como fazemos */}


        {/* conheca nossos servicos */}
        <h2 className="h2_servicos">Conheça os serviços da TaxMap</h2>
            <section className="sc-servicos">
                
                <div className="cardos_servicos_planeja">
                    <h4><a href="" className="servicos_link_o_que_Fazemos"><span>Planejamento Tributário</span></a></h4>
                    <ul>
                        <li>Otimização da Carga Tributária</li>
                        <li>Otimização de saldos credores</li>
                        <li>Recuperação de créditos fiscais</li>
                        <li>Reorganizações societárias</li>
                        <li>Aproveitamento de incentivos fiscais</li>
                        <li>Negociação com autoridades tributárias</li>
                    </ul>
                </div>

                <div className="cardos_servicos_planeja">
                    <h4><a href="" className="servicos_link_o_que_Fazemos"><span>Compliance tributário</span></a></h4>
                    <ul>
                        <li>Avaliação de procedimentos fiscais</li>
                        <li>Adequação da empresa às normas do setor</li>
                        <li>Conciliação das obrigações acessórias</li>
                        <li>Revisões periódicas</li>
                    </ul>
                </div>

                <div className="cardos_servicos_planeja">
                    <h4><a href="" className="servicos_link_o_que_Fazemos"><span>Consultoria tributária</span></a></h4>
                    <ul>
                        <li>Apoio técnico na interpretação de leis tributárias</li>
                        <li>Negociação com autoridades tributárias</li>
                        <li>Apoio na implantação de sistemas fiscais</li>
                        <li>Consultoria tributária contínua</li>
                        <li>Apoio em atividades tributárias internacionais</li>
                    </ul>
                </div>

                <div className="cardos_servicos_planeja">
                    <h4><a href="" className="servicos_link_o_que_Fazemos"><span>Tax Technology</span></a></h4>
                    <ul>
                        <li>Baixador de XMLs</li>
                        <li>Ressarcimento IPI</li>
                        <li>Facilitador de PERDCOMPs</li>
                        <li>Ressarcimento PIS/Cofins</li>
                        <li>Portaria CAT 42</li>
                        <li>RTC – Revisão de Tax Compliance</li>
                        <li>E-Credac</li>
                    </ul>
                </div>
            </section>
        {/* conheca nossos servicos*/}

        <Footer />

        </>
    )
}