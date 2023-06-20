import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthWrapper from "../Pages/AuthWrapperPages";
import ContentRouter from "./ContentRouter";
import Motifs from "../Components/Motifs/Motifs";
import  Centre from "../Components/Centre/Centre";


const Routeur = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthWrapper />} />
                <Route path="/content/*" element={<ContentRouter />} />
                <Route path="/motifs" element={<Motifs />} />
                <Route path="/centre" element={<Centre />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routeur;