import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AuthWrapper from "../Pages/AuthWrapperPages";
import ContentRouter from "./ContentRouter";

import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Routeur = () => {
    const [token_value, setTokenValue] = useState(localStorage.getItem("acces_bo_token"))
    const handleRes = () => {
        setTokenValue(localStorage.getItem("acces_bo_token"))
    }

    
    useEffect(() => {
        handleRes();
      
    }, [])
   
        
 

    return (
        <>
        <ToastContainer position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="colored"
            pauseOnHover />
            
            
        <BrowserRouter>
            <Routes>
                <Route path="/" element={token_value ? <Navigate to={"/content"} /> : <AuthWrapper />} />
                <Route path="/content/*" element={token_value ? <ContentRouter /> : <Navigate to={"/"} />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routeur;