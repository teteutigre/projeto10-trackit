import Topo from "../Topo/Topo";
import Bottom from "../Bottom/Bottom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import add from "../imgs/+.svg";

export default function Habitos() {
  const [habitos, setHabitos] = useState({});
  return (
    <>
      <Topo />
      <Main>
        <div>
          <h1>Meus hábitos</h1>
          <button>
            {" "}
            <img src={add} />{" "}
          </button>
        </div>
        <div className="habitos"></div>
      </Main>
      <Bottom />
    </>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  margin: 92px 0 92px 0;
  background-color: #e5e5e5;

  h1 {
    font-weight: 400;
    font-size: 23px;

    color: #126ba5;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  button {
    width: 40px;
    height: 35px;

    border: none;

    background: #52b6ff;
    border-radius: 4.8px;
  }
`;
