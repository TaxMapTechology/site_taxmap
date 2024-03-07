import Header from "../components/Header"
import '../styles/Planejamento_tributario.css'

import Footer from "../components/Footer";

import { Link } from 'react-router-dom';
import BackToTopButton from "../components/BackToTopButton";

// imagens
import img_planejamento from '/planejamento_tributário.png'
import img_consultoria from '/Imagem_Banner_Consultoria_Tributária_Pessoas_Apontando_para_Tela.png'
import imgPessoas from '/Imagem_Site_TaxMap_Pessoas_Andando.png'

export default function Consultoria_triburaria() {
    return(
        <>
        <Header />
        <BackToTopButton />
        <section className="banner-planejamento-tributario">
            <div>
                <h1>Consultoria Tributária</h1>
                <p>A Consultoria Tributária é um serviço especializado que visa orientar empresas na gestão inteligente de suas obrigações fiscais. Diante de um cenário tributário dinâmico, aplicar corretamente as normativas é crucial para evitar penalidades, otimizar a carga tributária e garantir a saúde financeira do negócio. Nossa equipe está pronta para oferecer suporte personalizado a empresas de todos os tamanhos e setores.</p>
            </div>
            <div>
                <img src={img_consultoria} alt="" />
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
            <p className="p_conheca">Conheça mais as nossas atuações dentro do Planejamento Tributário:</p>
            <div className="atuacoes">

                         <div className="wrap-div-list"> 
                            {/* incio primeiro card */}
                            <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-1" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-1" >
                                            <h2 className="faq_titulo">Apoio técnico na interpretação de leis tributárias</h2>
                                        </label>


                                        {/* conteudo dos cards */} 
                                        <div className="faq_conteudo">
                                            <p>Você conta com uma consultoria com especialistas que têm por objetivo evitar contingências e identificar ganhos tributários.</p>

                                            <ol>
                                                <li>Fornecemos apoio consultivo à equipe técnica da empresa</li>
                                                <li>Acompanhamos as mudanças diárias nas leis</li>
                                                <li>Interpretamos as mudanças e recomendamos sua correta aplicação</li>
                                            </ol>

                                        </div>

                                    </div>
                                </div>
                                
                            </div>

                            {/* fim primeiro card */}

            


                            {/* inicio terceiro card */}

                            <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-3" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-3" >
                                            <h2 className="faq_titulo">Consultoria tributária contínua</h2>
                                        </label>


                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>É um modelo de apoio a decisões com uma consultoria permanente visando evitar contingências e identificar ganhos tributários.</p>

                                            <ol>
                                                <li>Fornecemos apoio consultivo permanente às áreas fiscais</li>

                                                <li>Trabalho conduzido de forma remota ou com profissional alocado (staff loan)</li>

                                                <li>Apoio na definição de procedimentos fiscais</li>
                                            </ol>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>

                                {/* inicio quarto card */}

                                <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-4" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-4" >
                                            <h2 className="faq_titulo">Negociação com autoridades tributárias</h2>
                                        </label>


                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Uma boa consultoria técnica em relações governamentais ajuda a sua empresa a evitar contingências e identificar ganhos tributários.</p>

                                            <ol>
                                                <li>Prestamos assessoria na obtenção de regimes especiais</li>

                                                <li>Ajudamos na obtenção de incentivos fiscais</li>

                                                <li>Apoiamos a área de relacionamento institucional no aprimoramento de mudanças na legislação</li>

                                            </ol>

                                        </div>

                                    </div>
                                </div>
                                
                            </div>

                            {/* fim quarto card */}

                            {/* Fim terceiro card */}

                            </div>

                            <div className="wrap-div-list">

                           



                            {/* inicio quinto card */}

                            <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-5" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-5" >
                                            <h2 className="faq_titulo">Apoio na implantação de sistemas fiscais</h2>
                                        </label>


                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Um bom suporte na implantação de sistemas também pode ajudar sua empresa a evitar contingências tributárias.</p>

                                            <ol>
                                                <li>Apoio técnico na adequação dos sistemas fiscais (softwarehouse)</li>

                                                <li>Apoio no cumprimento dos requerimentos legais estabelecidos</li>
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
                                            <h2 className="faq_titulo">Apoio em atividades tributárias internacionais</h2>
                                        </label>


                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Quando sua empresa tem operações com o exterior, a consultoria tributária internacional da TaxMap pode ajudar na elaboração dos reports e informações para a matriz no exterior.</p>

                                            <p>Prestamos suporte técnico na elaboração de relatório</p>

                                            <ol>
                                                <li>Prestamos suporte técnico na elaboração de relatório</li>

                                                <li>Elaboramos reports fiscais internacionais</li>

                                                <li>Apoio para as matrizes no exterior sobre procedimentos adotados no Brasil.</li>
                                            </ol>

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
            <h1>10 anos de dedicação para simplificar a rotina fiscal das empresas</h1>
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
                    <p>Ocorre uma transação significativa na gestão</p>
                </div>

                <div className="como_fazemos_card_one">
                    <h3 className="h3_como_fazemos">02</h3>
                    <p className="cards_title">Processamento</p>
                    <p>Identifica-se insegurança nos processos tributários</p>
                </div>

                <div className="como_fazemos_card_one">
                    <h3 className="h3_como_fazemos">03</h3>
                    <p className="cards_title">Mapeamento</p>
                    <p>A TaxMap faz o diagnóstico</p>
                </div>

                <div className="como_fazemos_card_one">
                    <h3 className="h3_como_fazemos">04</h3>
                    <p className="cards_title">Mapeamento</p>
                    <p>A TaxMap apresenta a solução</p>
                </div>

                <div className="como_fazemos_card_one">
                    <h3 className="h3_como_fazemos">05</h3>
                    <p className="cards_title">Mapeamento</p>
                    <p>Conheça os serviços da TaxMap</p>
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