import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../imgs/logo.svg";
import Context from "../Context";

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useContext(Context);
  const { setImage } = useContext(Context);
  const [block, setBlock] = useState(false);
  const [loading, setLoading] = useState("Entrar");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function login(event) {
    event.preventDefault();
    setLoading(<ThreeDots color="white" />);
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        form
      )
      .then((resposta) => {
        setBlock(true);
        setToken(resposta.data.token);
        setImage(resposta.data.image);
        navigate("/habitos");
      })
      .catch(() => {
        setBlock(true);
        alert("Login ou senha inválidos");
        setLoading("Entrar");
        setBlock(false);
      });
  }

  return (
    <Main>
      <img src={logo} />
      <form>
        <input
          type="email"
          name="email"
          onChange={handleForm}
          value={form.email}
          placeholder="email"
          disabled={block}
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleForm}
          placeholder="senha"
          value={form.password}
          disabled={block}
          required
        />

        <button onClick={login}>{loading}</button>
      </form>

      <p onClick={() => navigate("/cadastro")}>
        Não tem uma conta? Cadastre-se!
      </p>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
