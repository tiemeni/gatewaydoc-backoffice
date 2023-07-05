import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AuthWrapper from "../Pages/AuthWrapperPages";
import { setIsConnected } from "../REDUX/commons/actions";
import { isValidToken } from "../services/users";
import ContentRouter from "./ContentRouter";




const Routeur = () => {
    const connected_user = useSelector(state => state.Common.isValidToken)
    const token_value = localStorage.getItem("acces_bo_token")
    const dispatch = useDispatch()
    const [canGo, setCanGo] = useState(connected_user)
    const [loading, setLoading] = useState(true)
    const handleRes = async () => {
        // tiemanirocksqsqetdss@gmail.com
        // qwerty123
        const data = await isValidToken({ token: token_value })
        dispatch(setIsConnected(data))
        setLoading(false)
        setCanGo(() => {
            return data
        });
    }


    useEffect(() => {
        // handleRes()
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthWrapper />} />
                <Route path="/content/*" element={<ContentRouter />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routeur;