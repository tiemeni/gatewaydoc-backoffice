import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import UsersLayout from "../../../layout/usersLayout";
import { getPraticienById } from "../../../services/praticiens";

const DetailPraticien = ()=>{
    const [praticien, setPraticien] = useState([]);

    const { userId } = useParams();

    useEffect(() => {
        getPraticienById(userId).then((data)=>{
            setPraticien(data);
        });
  }, [userId]);
    return <UsersLayout>
        <container maxWidth="md">
            <h1>Détail du Praticien</h1>
            <p className="container">{JSON.stringify(praticien)}</p>
        </container>
    </UsersLayout>
}
export default DetailPraticien;