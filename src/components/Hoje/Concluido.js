import axios from "axios";
import styled from "styled-components";
import { useState, useContext } from "react";
import Context from "../Context";
import { ReactComponent as CompletedButton } from "../imgs/vector.svg";
export default function Concluido({ element }) {
  const [check, setCheck] = useState(element.done);
  const { setHabitoFeito, token } = useContext(Context);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const concluído = () => {
    setCheck(!check);
    if (check) {
      setHabitoFeito((feito) => feito.filter((id) => id !== element.id));
      axios
        .post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${element.id}/uncheck`,
          config
        )
        .then((resposta) => console.log(resposta.data))
        .catch((erro) => console.log(erro.message));
    } else {
      setHabitoFeito((feito) => [...feito, element.id]);
      axios
        .post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${element.id}/check`,
          config
        )
        .then((resposta) => console.log(resposta.data))
        .catch((erro) => console.log(erro.message));
    }
  };

  return (
    <Confirm check={check}>
      <div className="info">
        <h2>{element.name}</h2>
        <p>
          Sequência atual: {element.currentSequence} dia(s) <br /> Seu recorde:{" "}
          {element.highestSequence} dia(s)
        </p>
      </div>
      <button onClick={() => concluído()}>
        {" "}
        <CompletedButton />{" "}
      </button>
    </Confirm>
  );
}

const Confirm = styled.div`
  width: 340px;
  height: 94px;

  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  .info {
    margin: 30px 35px 0px 0px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    h2 {
      font-size: 20px;
      margin-bottom: 10px;
      color: #666666;
    }
    p {
      font-size: 13px;
      color: #666666;
    }
  }

  button {
    width: 69px;
    height: 69px;
    display: flex;

    justify-content: center;
    align-items: center;

    background-color: ${({ check }) => (check ? "#8fc549" : "#EBEBEB")};
    border: none;
  }
`;
