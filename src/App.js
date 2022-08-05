import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro";
import Hoje from "./components/Hoje/Hoje";
import Bottom from "./components/Bottom/Bottom";
import Habitos from "./components/Habitos/Habitos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/habitos" element={<Habitos />} />
      </Routes>
    </BrowserRouter>
  );
}
