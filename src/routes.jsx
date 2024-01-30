import { BrowserRouter, Routes, Route } from "react-router-dom"

// importar rotas
import Home from './home/Home.jsx';


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/site_taxmap" element={ <Home /> } />
            </Routes>
        </BrowserRouter>
    )
}
