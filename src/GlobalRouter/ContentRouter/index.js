import { Box, LinearProgress, } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "../../Components/authers/Header";
import GestionMotifs from "../../Pages/PageGestionMotifs";
import Users from "../../Pages/Users";
import FackContainer from "../../Pages/PagePrincipale";
import NewUser from "../../Pages/RessourceCreateUpdate";
import NewPatient from "../../Pages/NewPatient";
import PageGestionPatients from "../../Pages/PageGestionPatients";
import PageGestionStructure from "../../Pages/PageGestionStructure";
import PageGestionLieux from "../../Pages/PageGestionLieux";
import PageGestionActivites from "../../Pages/PageGestionActivites";
import PageGestionTypePatients from "../../Pages/PageGestionTypePatients";
import PageGestionGroupesDroits from "../../Pages/PageGestionGroupesDroits";
import AddPraticien from "../../Pages/Praticien/AddPraticien";
import PageGestionPraticiens from "../../Pages/Praticien/PageGestionPraticiens";
import PageDetailPraticien from "../../Pages/Praticien/PageDetailPraticien";
import PageGestionOptionsAvancees from "../../Pages/PageGestionOptionsAvancees";
import FormGenerator from "../../Components/authers/FormGenerator";
import { practitionerFields } from "../../Constants/fields";
import PatientRouter from "./PatientRouter";
import SpecialitiesRouter from "./SpecialitiesRouter";
import NewLieux from "../../Pages/PageGestionLieux/NewLieux";
import AddMotif from "../../Pages/PageGestionMotifs/AddMotifs";
import AddGroupeDroit from "../../Pages/PageGestionGroupesDroits/AddGroupeDroit"
import PageGestionPaiement from "../../Pages/PageGestionPaiement";
import RessourceCreateUpdate from "../../Pages/RessourceCreateUpdate";
import PageGestionRessources from "../../Pages/PageGestionRessources";
import Dashboard from "../../Pages/Dashboard";

const ContentRouter = () => {
    return (
        <>
            {false && <Box sx={{ width: '100%', height: 1 }}>
                <LinearProgress />
            </Box>}
            <Box>
                <Header />
            </Box>
            <Routes>
                {/* ici ajouter les routes internes ... */}
                <Route path="/" element={<FackContainer />} />

                <Route path="/users" element={<Users />} />

                <Route path="/ressources/:ressourceName/creation" element={<RessourceCreateUpdate />} />
                <Route path="/ressources/:ressourceName" element={<PageGestionRessources />} />
                <Route path="/ressources/:ressourceName/modification/:ressourceId" element={<RessourceCreateUpdate />} />
                


                
                <Route path="/ressources/dashboard" element={<Dashboard />} />
                <Route path="/advancedOptions" element={<PageGestionOptionsAvancees />} />
                <Route path="/recappaiement" element={<PageGestionPaiement />} />
            </Routes>
        </>
    )
}

export default ContentRouter;