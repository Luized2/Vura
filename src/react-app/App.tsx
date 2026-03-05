import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import SetupPage from "@/react-app/pages/Setup";
import InvestigationPage from "@/react-app/pages/Investigation";
import LoadingPage from "@/react-app/pages/Loading";
import ResultsPage from "@/react-app/pages/Results";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SetupPage />} />
        <Route path="/investigation" element={<InvestigationPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
