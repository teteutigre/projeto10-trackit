import { useState } from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../imgs/logo.svg";

export default function Cadastro() {
  const navigate = useNavigate();
  const [block, setBlock] = useState(false);
  const [loading, setLoading] = useState("Cadastrar");

  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function cadastro(event) {
    event.preventDefault();
    setLoading(<ThreeDots color="white" />);
    setBlock(true);
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        form
      )
      .then(() => {
        setLoading(<ThreeDots color="white" />);
        navigate("/");
      })
      .catch(() => {
        alert("Conta ja registrada");
        setLoading("Cadastrar");
        setBlock(false);
      });
  }

  return (
    <Main>
      <img src={logo} />
      <form>
        <input
          required
          type="email"
          name="email"
          onChange={handleForm}
          value={form.email}
          placeholder="email"
          disabled={block}
        />

        <input
          required
          type="password"
          name="password"
          onChange={handleForm}
          placeholder="senha"
          value={form.password}
          disabled={block}
        />

        <input
          required
          type="text"
          name="name"
          onChange={handleForm}
          placeholder="nome"
          value={form.name}
          disabled={block}
        />

        <input
          required
          type="url"
          name="image"
          onChange={handleForm}
          placeholder="foto"
          value={form.image}
          disabled={block}
        />
        <button onClick={cadastro}>{loading}</button>
      </form>
      <p onClick={() => navigate("/")}>Já tem uma conta? Faça login!</p>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  padding-bottom: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: #ffffff;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 6px;
  }

  img {
    margin: 6.8rem 0 3.2rem 0;
  }

  input::placeholder {
    font-weight: 400;
    font-size: 19.976px;
    color: #dbdbdb;
    padding-left: 11px;
  }

  input {
    width: 303px;
    height: 45px;

    background: #ffffff;
    border: 0.1rem solid #d5d5d5;
    border-radius: 0.5rem;
  }

  button {
    width: 303px;
    height: 45px;

    background: #52b6ff;
    border-radius: 4.6px;

    font-weight: 400;
    font-size: 21px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    margin-bottom: 25px;

    color: #ffffff;

    border: none;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    text-decoration-line: underline;

    color: #52b6ff;
  }
`;
