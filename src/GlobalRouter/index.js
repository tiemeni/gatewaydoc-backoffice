import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthWrapper from "../Pages/AuthWrapperPages";
import ContentRouter from "./ContentRouter";



const Routeur = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthWrapper />} />
                <Route path="/content/*" element={<ContentRouter />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routeur;