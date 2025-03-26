import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import './i18n'; 
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
