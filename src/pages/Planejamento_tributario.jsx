import Header from "../components/Header"
import '../styles/Planejamento_tributario.css'

import Footer from "../components/Footer";

import { Link } from 'react-router-dom';
import BackToTopButton from "../components/BackToTopButton";

// imagens
import img_planejamento from '/planejamento_tributário.png'
import imgPessoas from '/Imagem_Site_TaxMap_Pessoas_Andando.png'

export default function Planejamento_triburario() {
    return(
        <>
        <Header />
        <BackToTopButton />
        <section className="banner-planejamento-tributario">
            <div>
                <h1>Planejamento Tributário</h1>
                <p>O Planejamento Tributário é prática fundamental para qualquer empresa ou empreendedor que deseja otimizar sua carga tributária de forma legal e manter a saúde financeira de seu negócio. Engloba um conjunto de estratégias e iniciativas que buscam a maximização da eficiência no pagamento de tributos, seguindo princípios legais e éticos.</p>
            </div>
            <div>
                <img src={img_planejamento} alt="" />
            </div>
        </section>

        {/* contato */}
        <section className="contato">
            <h1>Conte com a TaxMap como sua parceira na busca por eficiência e segurança na sua gestão fiscal.</h1>
            <Link to="/site_taxmap/pages/Contato" className="Link">Entrar em contato</Link>
        </section>
        {/* contato */}

        {/* atuações */}
        <section className="atuacoes-section">
            <p className="p_conheca">Conheça algumas de nossas iniciativas de Planejamento Tributário:</p>
            <div className="atuacoes">

                         <div className="wrap-div-list"> 
                            {/* incio primeiro card */}
                            <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-1" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-1" >
                                            <h2 className="faq_titulo">Otimização da Carga Tributária</h2>
                                        </label>

                                        {/* conteudo dos cards */} 
                                        <div className="faq_conteudo">
                                            <p>Estratégia para a minimização do ônus tributário e maximização da lucratividade do negócio, garantindo o cumprimento das obrigações fiscais de acordo com a lei.</p>

                                            <ol>
                                                <li>Analisamos as operações da empresa</li>
                                                <li>Identificamos oportunidades de economia</li>
                                                <li>Implementamos um plano de ação</li>
                                            </ol>

                                                <p><b>Como a Otimização da Carga Tributária pode beneficiar a sua empresa?</b></p>

                                                <ul className="ul">
                                                    <li>Redução de custos com a minimização dos impostos de forma legal</li>

                                                    <li>Mais recursos disponíveis para investir no crescimento do negócio.</li>

                                                    <li>Assegura conformidade com as leis fiscais.</li>

                                                    <li>Torna a empresa mais competitiva ao proporcionar uma otimização de preços</li>

                                                    <li>Proporciona uma gestão financeira mais precisa e estratégica.</li>
                                                </ul>
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
                                            <h2 className="faq_titulo">Otimização de saldos credores</h2>
                                        </label>

                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Sua empresa pode liberar recursos que muitas vezes ficam ociosos, aumentando a liquidez.</p>

                                            <ol>
                                                <li>Analisamos os ativos financeiros e a operação da sua cadeia de suprimentos</li>

                                                <li>Avaliamos a possibilidade de regimes especiais (diferimento)</li>

                                                <li>Propomos mudanças nesses fluxos</li>

                                                <li>Alcançamos a redução desses saldos de créditos fiscais</li>
                                            </ol>

                                                <p><b>Como a Otimização de Saldos Credores pode beneficiar a sua empresa?</b></p>

                                                <ul className="ul">
                                                    <li>Transforme ativos ociosos em recursos financeiros disponíveis para investimentos ou necessidades operacionais.</li>

                                                    <li>Minimize os custos associados a empréstimos e financiamentos, uma vez que há menos necessidade de capital externo.</li>

                                                    <li>Coloque seu capital para trabalhar, gerando lucros ou rendimentos a partir de investimentos financeiros.</li>

                                                    <li>Tenha maior flexibilidade financeira.</li>

                                                </ul>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>

                            {/* fim segundo card */}

                            {/* inicio terceiro card */}

                            <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-3" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-3" >
                                            <h2 className="faq_titulo">Recuperação de créditos fiscais</h2>
                                        </label>

                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Via levantamento de créditos não aproveitados, obtenha melhorias no caixa e nas margens de lucro.</p>

                                            <ol>
                                                <li>Analisamos a documentação fiscal</li>

                                                <li>Buscamos a aplicação do melhor entendimento das leis</li>

                                                <li>Levantamos os créditos fiscais não aproveitados ou valores pagos indevidamente</li>

                                                <li>Orientamos o aproveitamento desses créditos</li>

                                                <li>Atuamos na implementação</li>
                                            </ol>

                                                <p><b>Como a Recuperação de Créditos Fiscais pode beneficiar a sua empresa?</b></p>

                                                <ul className="ul">
                                                    <li>Recupere valores pagos a mais e coloque-os de volta no caixa da empresa.</li>

                                                    <li>Ajuste sua situação fiscal para pagar apenas o que é devido, otimizando sua carga tributária.</li>

                                                    <li>Utilize os recursos recuperados para investimentos em expansão, inovação ou aprimoramento de produtos/serviços.</li>

                                                    <li>Assegure que sua empresa está em total conformidade com as leis fiscais.</li>

                                                    <li>Potencialize seus resultados financeiros e lucratividade.</li>
                                                </ul>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>

                            {/* Fim terceiro card */}

                            </div>

                            <div className="wrap-div-list">

                            {/* inicio quarto card */}

                            <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-4" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-4" >
                                            <h2 className="faq_titulo">Reorganizações societárias</h2>
                                        </label>

                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Obtenha sinergias de procedimentos fiscais decorrentes de reestruturações societárias.</p>

                                            <ol>
                                                <li>Analisamos a estrutura societária da empresa</li>

                                                <li>Identificamos oportunidades de simplificação possibilitando reduções tributárias</li>
                                            </ol>

                                                <p><b>Como o apoio em reorganizações societárias pode beneficiar a sua empresa?</b></p>

                                                <ul className="ul">
                                                    <li>Minimização de riscos e problemas legais ou financeiros.</li>

                                                    <li>Otimização de recursos da maneira mais estratégica possível.</li>

                                                    <li>Ajuda a garantir que a reorganização agregue valor à empresa e aos acionistas.</li>
                                                </ul>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>

                            {/* fim quarto card */}

                            {/* inicio quinto card */}

                            <div className="wrapper">
                                
                                <div className="lista_item">
                                    <input className="trigger_input" id="faq-titulo-5" type="checkbox" />
                                    <div className="trigger_wrapper">
                                        <label htmlFor="faq-titulo-5" >
                                            <h2 className="faq_titulo">Aproveitamento de incentivos fiscais</h2>
                                        </label>

                                        {/* conteudo dos cards */}
                                        <div className="faq_conteudo">
                                            <p>Usufrua dos estímulos oferecidos pelo governo para promover o desenvolvimento econômico, regional e setorial, em níveis federal, estadual e municipal. Estes benefícios podem incluir isenções, reduções de impostos, créditos tributários e outros mecanismos que visam reduzir a carga fiscal da sua empresa.</p>

                                            <ol>
                                                <li>Entendemos o fluxo operacional da sua empresa</li>

                                                <li>Analisamos a legislação</li>

                                                <li>Recomendamos a adesão aos</li>

                                                <li>incentivos fiscais</li>

                                                <li>Apoiamos a elaboração dos projetos e pleitos</li>

                                                <li>Realizamos o acompanhamento até a obtenção dos benefícios</li>
                                            </ol>

                                                <p><b>Como isso pode beneficiar a sua empresa?</b></p>

                                                <ul className="ul">
                                                    <li>Reduza significativamente seus custos fiscais, aumentando a margem de lucro.</li>

                                                    <li>Disponibilize recursos adicionais para investir em expansão, inovação ou contratação de talentos.</li>

                                                    <li>Aproveite os benefícios fiscais para tornar seus produtos e serviços mais competitivos no mercado.</li>

                                                    <li>Contribua para o desenvolvimento econômico de sua região, gerando empregos e oportunidades.</li>

                                                    <li>Certifique-se de estar em conformidade com as leis tributárias enquanto aproveita os incentivos disponíveis.</li>
                                                </ul>
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
                                                    <li>Minimize riscos de penalidades</li>

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
            <br />
            <p>As seguintes etapas são cumpridas em todos os projetos:</p>

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

                <div className="como_fazemos_card_one">
                    <h3 className="h3_como_fazemos">04</h3>
                    <p className="cards_title">Apresentação</p>
                    <p>rápida e objetiva dos resultados esperados</p>
                </div>

                <div className="como_fazemos_card_one">
                    <h3 className="h3_como_fazemos">05</h3>
                    <p className="cards_title">Implementação</p>
                    <p>das operações e avaliações dos cenários</p>
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