import { Route, Routes } from "react-router-dom";
import FackContainer from "../../Container";

const ContentRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<FackContainer />} />
        </Routes>
    )
}

export default ContentRouter;