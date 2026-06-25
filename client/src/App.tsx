import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import HomePage from "./pages/user/HomePage";
import ActivityProposalPage from "./pages/user/ActivityProposalPage";
import RelevantFormsPage from "./pages/user/RelevantFormsPage";
import ExternalLinksPage from "./pages/user/ExternalLinksPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route
                    path="/activity-proposals"
                    element={<ActivityProposalPage />}
                />
                <Route path="/forms" element={<RelevantFormsPage />} />
                <Route path="/external-links" element={<ExternalLinksPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
