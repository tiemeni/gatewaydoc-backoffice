import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AuthWrapper from "../Pages/AuthWrapperPages";
import ContentRouter from "./ContentRouter";


const Routeur = () => {
    const connected_user = useSelector(state => state.Common.isValidToken)
    const [token_value, setTokenValue] = useState(localStorage.getItem("acces_bo_token"))
    const dispatch = useDispatch()
    const [canGo, setCanGo] = useState(connected_user)
    const [loading, setLoading] = useState(true)
    const handleRes = () => {
        // tiemanirocksqsqetdss@gmail.com
        // qwerty123
        // const data = await isValidToken({ token: token_value })
        // dispatch(setIsConnected(data))
        // setLoading(false)
        // setCanGo(() => {
        //     return data
        // });
        setTokenValue(localStorage.getItem("acces_bo_token"))
    }


    useEffect(() => {
        handleRes()
    }, [])

    console.log(token_value)

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