import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro";
import Hoje from "./components/Hoje/Hoje";
import Habitos from "./components/Habitos/Habitos";
import Context from "./components/Context";

export default function App() {
  const [token, setToken] = useState("");
  const [image, setImage] = useState("");
  const [arrayDay, setArrayDay] = useState([]);

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        image,
        setImage,
        arrayDay,
        setArrayDay,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/habitos" element={<Habitos />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
