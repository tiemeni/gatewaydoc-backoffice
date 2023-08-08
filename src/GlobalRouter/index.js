import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AuthWrapper from "../Pages/AuthWrapperPages";
import ContentRouter from "./ContentRouter";


const Routeur = () => {
    const [token_value, setTokenValue] = useState(localStorage.getItem("acces_bo_token"))
    const handleRes = () => {
        setTokenValue(localStorage.getItem("acces_bo_token"))
    }

    useEffect(() => {
        handleRes()
    }, [])



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={token_value ? <Navigate to={"/content"} /> : <AuthWrapper />} />
                <Route path="/content/*" element={token_value ? <ContentRouter /> : <Navigate to={"/"} />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routeur;