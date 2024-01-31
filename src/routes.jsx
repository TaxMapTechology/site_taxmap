import { BrowserRouter, Routes, Route } from "react-router-dom"

// importar rotas
import Home from './home/Home.jsx';
import Institucional from "./pages/Institucional.jsx";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/site_taxmap" element={ <Home /> } />
                <Route path="/site_taxmap/pages/institucional" element={ <Institucional /> } />
            </Routes>
        </BrowserRouter>
    )
}
