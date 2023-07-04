import { Box, LinearProgress, } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "../../Components/authers/Header";
import GestionMotifs from "../../Pages/PageGestionMotifs";
import Users from "../../Pages/Users";
import FackContainer from "../../Pages/PagePrincipale";
import NewUser from "../../Pages/NewUser";
import PageGestionPatients from "../../Pages/PageGestionPatients";
import PageGestionStructure from "../../Pages/PageGestionStructure";
import PageGestionLieux from "../../Pages/PageGestionLieux";
import PageGestionActivites from "../../Pages/PageGestionActivites";
import PageGestionSpecialites from "../../Pages/PageGestionSpecialites";
import PageGestionTypePatients from "../../Pages/PageGestionTypePatients";
import PageGestionGroupesDroits from "../../Pages/PageGestionGroupesDroits";
import PageGestionPraticiens from "../../Pages/PageGestionPraticiens";
import PageGestionOptionsAvancees from "../../Pages/PageGestionOptionsAvancees";
// import AddPraticien from "../../Pages/AddPraticien";
import FormGenerator from "../../Components/authers/FormGenerator";
import { practitionerFields, userFields } from "../../Constants/fields";

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
                <Route path="/users/add" element={<NewUser />} />
                <Route path="/users/add/:userId" element={<NewUser />} />

                <Route path="/patients" element={<PageGestionPatients />} />
                <Route path="/structure" element={<PageGestionStructure />} />
                <Route path="/lieux" element={<PageGestionLieux />} />
                <Route path="/activites" element={<PageGestionActivites />} />
                <Route path="/motifs" element={<GestionMotifs />} />
                <Route path="/specialites" element={<PageGestionSpecialites />} />
                <Route path="/typepatients" element={<PageGestionTypePatients />} />
                <Route path="/groupe_droits" element={<PageGestionGroupesDroits />} />
                <Route path="/praticiens" element={<PageGestionPraticiens />} />
                <Route path="/praticiens/add" element={<FormGenerator fields={practitionerFields} title={"Fiche praticien"} />} />
                <Route path="/advancedOptions" element={<PageGestionOptionsAvancees />} />
            </Routes>
        </>
    )
}

export default ContentRouter;