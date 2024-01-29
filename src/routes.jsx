import { BrowserRouter, Routes, Route } from "react-router-dom";

// importar rotas
import Home from "./home/Home.jsx"


export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/home/Home" element={ <Home /> } />
            </Routes>
        </BrowserRouter>
    )
}