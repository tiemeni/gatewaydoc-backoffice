import { Box, LinearProgress, } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Header from "../../Components/authers/Header";
import GestionMotifs from "../../Pages/PageGestionMotifs";
import Users from "../../Pages/Users";
import FackContainer from "../../Pages/PagePrincipale";

const ContentRouter = () => {
    // Colors.primary
    return (
        <>
            {false && <Box sx={{ width: '100%', }}>
                <LinearProgress />
            </Box>}
            <Header />
            <Routes>
                {/* ici ajouter les routes internes ... */}
                <Route path="/" element={<FackContainer />} />
                <Route path="/users" element={<Users />} />
                <Route path="/motifs" element={<GestionMotifs />} />
            </Routes>
        </>
    )
}

export default ContentRouter;