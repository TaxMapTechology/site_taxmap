import Header from "../components/Header"
import '../styles/Planejamento_tributario.css'

import Footer from "../components/Footer";

import { Link } from 'react-router-dom';

import BackToTopButton from "../components/BackToTopButton";

// imagens
import img_planejamento from '/planejamento_tributário.png'
import imgPessoas from '/Imagem_Site_TaxMap_Pessoas_Andando.png'

import img_compliance from '/Imagem_Banner_Compliance_Tributário_Mulher_Mexendo_No_Notebook.png'

export default function Compliance_triburario() {
    return(
        <>
        <Header />
        <BackToTopButton />
        <section className="banner-planejamento-tributario">
            <div className="texto_planejamento">
                <h1>Compliance Tributário</h1>
                <p>O Compliance Tributário é uma prática de cumprir integralmente as obrigações fiscais estabelecidas pelos órgãos reguladores. Consiste em um conjunto de estratégias e ações que incluem a revisão minuciosa das obrigações fiscais, identificação de riscos, e a implementação de estratégias para otimizar a carga tributária.</p>
            </div>
            <div>
                <img src={img_compliance} alt="" />
            </div>
        </section>

        {/* contato */}
        <section className="contato">
            <h1>Conte com a TaxMap como sua parceira na busca por eficiência na sua gestão fiscal.</h1>
            <Link to="/site_taxmap/pages/Contato" className="Link">Entrar em contato</Link>
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
                                            <h2 className="faq_titulo">Avaliação de procedimentos fiscais</h2>
                                        </label>


                                        {/* conteudo dos cards */} 
                                        <div className="faq_conteudo">
                                            <p>Para o seu negócio, a Revisão de Tax Compliance evita surpresas e ajuda a mapear as contingências fiscais.</p>

                                            <ol>
                                                <li>Mapeamos os processos fiscais executados por sua empresa</li>
                                                <li>Realizamos o diagnóstico tributário</li>
                                                <li>Reportamos os riscos e pontos de melhoria aos gestores </li>
                                            </ol>                                           
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
                                            <h2 className="faq_titulo">Conciliação das obrigações acessórias</h2>
                                        </label>


                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Em uma avaliação prévia ao exame de auditoria, sua empresa ficará resguardada da identificação de divergências fiscais.</p>

                                            <ol>
                                                <li>Revisamos os pontos já levantados por auditoria anterior</li>

                                                <li>Identificamos novos pontos de controle e apontamos os casos de retificação</li>

                                                <li>Conciliamos as apurações fiscais com os saldos contábeis</li>
                                            </ol>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>


                            {/* fim segundo card */}

                            {/* inicio quarto card */}

                            <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-4" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-4" >
                                            <h2 className="faq_titulo">Adequação da empresa às normas do setor</h2>
                                        </label>


                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Para evitar contingências tributárias, realizamos a revisão dos procedimentos fiscais executados por sua empresa.</p>

                                            <ol>
                                                <li>Levantamos as regras tributárias específicas do setor</li>

                                                <li>Analisamos o cumprimento por parte da empresa</li>

                                                <li>Elaboramos uma matriz de riscos, buscando prevenir a empresa de contingências tributárias </li>
                                            </ol>

                                        </div>

                                    </div>
                                </div>
                                
                            </div>

                            {/* fim quarto card */}

                            </div>

                            <div className="wrap-div-list">

                            {/* inicio quinto card */}

                            <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-5" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-5" >
                                            <h2 className="faq_titulo">Revisões periódicas</h2>
                                        </label>


                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>As revisões tributárias periódicas ajudam sua empresa a manter a conformidade fiscal da sua operação.</p>

                                            <ol>
                                                <li>Revisamos os procedimentos adotados na apuração mensal dos tributos</li>

                                                <li>Definimos pontos de atenção e de melhoria</li>

                                                <li>Sugerimos ações para continuidade das ações pela empresa</li>
                                            </ol>
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
                                            <h2 className="faq_titulo">Negociação com autoridades tributárias</h2>
                                        </label>


                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Serviço especializado que envolve o diálogo com as autoridades fiscais, visando a resolução de disputas fiscais, homologação de créditos, acordos de pagamento de débitos, a contestação de autuações fiscais e a busca de soluções para questões fiscais complexas.</p>

                                            <p>Com profundo conhecimento das leis fiscais e regulamentações aplicáveis:</p>

                                            <ol>
                                                <li>Estabelecemos o relacionamento e ponto de contato com entes fazendários</li>

                                                <li>Buscamos por regimes especiais e acompanhamos as modificações na legislação</li>

                                                <li>Conduzimos negociações de forma a proteger seus interesses e garantir a conformidade legal</li>
                                            </ol>

                                                <p><b>Como a negociação com autoridades tributárias pode beneficiar a sua empresa?</b></p>

                                                <ul className="ul">
                                                    <li>Minimização de Penalidades</li>

                                                    <li>Resolva pendências fiscais de forma a evitar processos judiciais e garantir a continuidade das operações.</li>

                                                    <li>Negocie acordos de pagamento que se ajustem à sua capacidade financeira.</li>

                                                    <li>Evite problemas legais e proteja a reputação da sua empresa.</li>

                                                    <li>Garanta a conformidade com a legislação tributária enquanto resolve questões fiscais pendentes.</li>
                                                </ul>
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
                    <p className="cards_title">Definição de escopo</p>
                    <p>Onde identificamos a necessidade do cliente</p>
                </div>

                <div className="como_fazemos_card_one">
                    <h3 className="h3_como_fazemos">02</h3>
                    <p className="cards_title">Mapeamento</p>
                    <p>E regularização de compliance</p>
                </div>

                <div className="como_fazemos_card_one">
                    <h3 className="h3_como_fazemos">03</h3>
                    <p className="cards_title">Solução aplicada</p>
                    <p>Onde a TaxMap aplica o seu conhecimento consultivo</p>
                </div>

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