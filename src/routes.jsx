import { BrowserRouter, Routes, Route } from "react-router-dom"

// importar rotas
import Home from './home/Home.jsx';
import Institucional from "./pages/Institucional.jsx";
import Planejamento_triburario from "./pages/Planejamento_tributario.jsx";
import Consultoria_triburaria from "./pages/Consultoria_tributaria.jsx";
import Compliance_triburario from "./pages/Compliance_tributario.jsx";
import Tax_technology from "./pages/Tax_technology.jsx";
import Contato from "./pages/Contato.jsx";
import Publicacoes from "./pages/publicacoes/Publicacoes.jsx";
import Politica_privacidade from "./pages/Politica_privacidade.jsx";
import Publi_content from "./pages/publicacoes/Publi_content.jsx";
import Carreira from "./pages/Carreira.jsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/site_taxmap" element={ <Home /> } />
                <Route path="/site_taxmap/pages/institucional" element={ <Institucional /> } />
                <Route path="/site_taxmap/pages/Planejamento_tributario" element={<Planejamento_triburario />}/>

                <Route path="/site_taxmap/pages/Consultoria_tributaria" element={ <Consultoria_triburaria /> }/>

                <Route path="/site_taxmap/pages/Compliance_tributario" element={ <Compliance_triburario /> }/>

                <Route path="/site_taxmap/pages/Tax_technology" element={ <Tax_technology /> }/>

                <Route path="/site_taxmap/pages/Contato" element={ <Contato /> }/>

                <Route path="/site_taxmap/pages/publicacoes/Publicacoes" element={ <Publicacoes /> }/>

                <Route path="/site_taxmap/pages/Politica_privacidade" element={ <Politica_privacidade /> }/>

                <Route path="/site_taxmap/pages/publicacoes/Publi_content" element={ <Publi_content /> }/>

                <Route path="/site_taxmap/pages/publicacoes/Carreira" element={ <Carreira /> }/>
            </Routes>
        </BrowserRouter>
    )
}
