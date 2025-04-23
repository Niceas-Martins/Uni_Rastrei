import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./Style/global.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Home/Dashboard";
import Novo_Paciente from "./pages/Home/Novo_Paciente";
import Calendario from "./pages/Home/Calendario";
import Paciente from "./pages/Home/Paciente";
import Historico_Do_Paciente from './pages/Home/Historico_Do_Paciente';
import Exame_Do_Paciente from './pages/Home/Exame_Do_Paciente';
import Exame from './pages/Home/Exame';

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Novo_Paciente" element={<Novo_Paciente />} />
      <Route path="/Calendario" element={<Calendario />} />
      <Route path="/Paciente" element={<Paciente />} />
      <Route path="/Historico_Do_Paciente" element={<Historico_Do_Paciente />} />
      <Route path="/Exame_Do_Paciente" element={<Exame_Do_Paciente />} />
      <Route path="/Exame/0" element={<Exame />} />
      <Route path="/Exame/1" element={<Exame />} />
      <Route path="/Exame/2" element={<Exame />} />
      <Route path="/Exame/3" element={<Exame />} />
      <Route path="/Exame/4" element={<Exame />} />
    </Routes>
  </Router>
);