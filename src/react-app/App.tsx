import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import SetupPage from "@/react-app/pages/Setup";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SetupPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
