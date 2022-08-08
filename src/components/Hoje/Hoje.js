import Topo from "../Topo/Topo";
import Bottom from "../Bottom/Bottom";
import styled from "styled-components";
import React from "react";
import { useContext, useEffect } from "react";
import Context from "../Context";
import axios from "axios";
import Concluido from "./Concluido";

export default function Hoje() {
  const { token, habitoDia, setHabitoDia, porcento } = useContext(Context);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );
    promise
      .then((resposta) => {
        setHabitoDia(resposta.data);
      })
      .catch((erro) => console.log(erro.message));
  }, []);

  const dia = new Date();

  const semana = [
    "Domingo",
    "Segunda",
    "Terça-Feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  return (
    <>
      <Topo />
      <Main>
        <h2>
          {semana[dia.getDay()]}, {dia.getDate()}/
          {dia.getMonth() < 10 ? `0${dia.getMonth() + 1}` : dia.getMonth()}
        </h2>

        {porcento === 0 ? (
          <p>Nenhum hábito concluído ainda</p>
        ) : (
          <p>{porcento.toFixed()}% dos hábitos concluídos</p>
        )}

        {habitoDia.map((element, index) => {
          return <Concluido key={index} element={element} />;
        })}
      </Main>
      <Bottom />
    </>
  );
}

const Main = styled.main`
  margin-top: 100px;
  margin-bottom: 80px;
  padding: 18px;

  h2 {
    font-size: 22px;
    color: #126ba5;
  }
  p {
    margin: 4px 0 28px 0;
    font-size: 18px;
    color: #bababa;
  }
`;
