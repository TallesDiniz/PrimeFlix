import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Header from "./components/Header";
import Favoritos from "./pages/Favoritos";

import Error from "./pages/Error";

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies/:id" element={<Movies/>}/>
                <Route path="favoritos" element={<Favoritos/>}/>

                <Route path="*" element={<Error/>}/>
            </Routes>
    
        </BrowserRouter>
    )
}

export default RoutesApp;