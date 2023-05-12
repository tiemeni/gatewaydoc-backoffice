import { Route, Routes } from "react-router-dom";
import Header from "../../Components/authers/Header";
import GestionMotifs from "../../Pages/PageGestionMotifs";
import GestionUsers from "../../Pages/PageGestionUtilisateurs/style";
import FackContainer from "../../Pages/PagePrincipale";

const ContentRouter = () => {
    return (
        <>
            <Header />
            <Routes>
                {/* ici ajouter les routes internes ... */}
                <Route path="/" element={<FackContainer />} />
                <Route path="/users" element={<GestionUsers />} />
                <Route path="/motifs" element={<GestionMotifs />} />
            </Routes>
        </>
    )
}

export default ContentRouter;