import Header from "../components/Header"
import '../styles/Planejamento_tributario.css'

import { Link } from 'react-router-dom';

// imagens
import img_planejamento from '/planejamento_tributário.png'

export default function Planejamento_triburario() {
    return(
        <>
        <Header />
        <section className="banner-planejamento-tributario">
            <div>
                <h1>Planejamento Tributário</h1>
                <p>O Planejamento Tributário é uma prática fundamental para qualquer empresa ou empreendedor que deseja maximizar seus lucros e manter a saúde financeira do negócio. Consiste em um conjunto de estratégias e ações que visam a otimização do pagamento de tributos, de forma completamente legal e ética.</p>
            </div>
            <div>
                <img src={img_planejamento} alt="" />
            </div>
        </section>

        {/* contato */}
        <section className="contato">
            <h1>Conte com a TaxMap como sua parceira na busca por eficiência e economia na sua gestão fiscal.</h1>
            <Link to="" className="Link">Entrar em contato</Link>
        </section>
        {/* contato */}
        </>
    )
}