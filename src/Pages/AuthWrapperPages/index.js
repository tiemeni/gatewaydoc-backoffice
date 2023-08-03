
import React from 'react'
import LoginPage from './LoginPage'
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return new URLSearchParams(search);
}

const AuthWrapper = () => {
  const idc = useQuery().get("idc")
  console.log(idc)
  return (
    <LoginPage idc={idc} />
  )
}



export default AuthWrapper