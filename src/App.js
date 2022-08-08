import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./components/Tela 1/Login/Login";
import Cadastro from "./components/Tela 1/Cadastro/Cadastro";
import Hoje from "./components/Hoje/Hoje";
import Habitos from "./components/Habitos/Habitos";
import Historico from "./components/Historico/Historico";
import Context from "./components/Context";

export default function App() {
  const [token, setToken] = useState("");
  const [image, setImage] = useState("");
  const [arrayDay, setArrayDay] = useState([]);
  const [habitoDia, setHabitoDia] = useState([]);
  const [habitoFeito, setHabitoFeito] = useState([]);
  const [porcento, setPorcento] = useState(
    (habitoFeito.length / habitoDia.length) * 100
  );

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        image,
        setImage,
        arrayDay,
        setArrayDay,
        habitoDia,
        setHabitoDia,
        porcento,
        setPorcento,
        habitoFeito,
        setHabitoFeito,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
