import { BrowserRouter, Routes, Route } from "react-router-dom"

// importar rotas
import Home from './home/Home.jsx';
import Institucional from "./pages/Institucional.jsx";
import Planejamento_triburario from "./pages/Planejamento_tributario.jsx";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/site_taxmap" element={ <Home /> } />
                <Route path="/site_taxmap/pages/institucional" element={ <Institucional /> } />
                <Route path="/site_taxmap/pages/Planejamento_tributario" element={<Planejamento_triburario />}/>
            </Routes>
        </BrowserRouter>
    )
}
