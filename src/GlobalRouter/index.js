import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthWrapper from "../Pages/AuthWrapperPages";
import ContentRouter from "./ContentRouter";
import Motifs from "../Components/Motifs/Motifs";
import  Centre from "../Components/Centre/Centre";
import { Box, LinearProgress, } from "@mui/material";
import Header from "../Components/authers/Header";
import GestionMotifs from "../Pages/PageGestionMotifs";
import Users from "../Pages/Users";
import FackContainer from "../Pages/PagePrincipale";
import NewUser from "../Pages/NewUser";
import PageGestionPatients from "../Pages/PageGestionPatients";
import PageGestionStructure from "../Pages/PageGestionStructure";
import PageGestionLieux from "../Pages/PageGestionLieux";
import PageGestionActivites from "../Pages/PageGestionActivites";
import PageGestionSpecialites from "../Pages/PageGestionSpecialites";
import PageGestionTypePatients from "../Pages/PageGestionTypePatients";
import PageGestionGroupesDroits from "../Pages/PageGestionGroupesDroits";
import PageGestionPraticiens from "../Pages/PageGestionPraticiens";
import PageGestionOptionsAvancees from "../Pages/PageGestionOptionsAvancees";
import PageGestionUtilisateur from "../Pages/PageGestionUtilisateur";
import AddPraticien from "../Pages/AddPraticien";

const Routeur = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthWrapper />} />
                <Route path="/content/*" element={<ContentRouter />} />
                <Route path="/motifs" element={<Motifs />} />
                <Route path="/centre" element={<Centre />} />
                {/* <Route path="/users" element={<Users />} /> */}
                <Route path="/users/add" element={<NewUser />} />
                <Route path="/users" element={<PageGestionUtilisateur />} />
                <Route path="/patients" element={<PageGestionPatients />} />
                <Route path="/structure" element={<PageGestionStructure />} />
                <Route path="/lieux" element={<PageGestionLieux />} />
                <Route path="/activites" element={<PageGestionActivites />} />
                <Route path="/specialites" element={<PageGestionSpecialites />} />
                <Route path="/typepatients" element={<PageGestionTypePatients />} />
                <Route path="/groupe_droits" element={<PageGestionGroupesDroits />} />
                <Route path="/praticiens" element={<PageGestionPraticiens />} />
                <Route path="/praticiens/add" element={<AddPraticien />} />
                <Route path="/advancedOptions" element={<PageGestionOptionsAvancees />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routeur;