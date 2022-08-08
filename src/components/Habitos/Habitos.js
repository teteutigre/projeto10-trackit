import Topo from "../Topo/Topo";
import Bottom from "../Bottom/Bottom";
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import mais from "../imgs/+.svg";
import axios from "axios";
import Context from "../Context";
import Days from "./Days";
import Del from "../imgs/del.svg";
import Habi from "./Habi";

export default function Habitos() {
  const [add, setAdd] = useState(false);
  const [apiHab, setApiHab] = useState([]);
  const [form, setForm] = useState("");
  const { arrayDay, setArrayDay } = useContext(Context);
  const [loading, setLoading] = useState("Salvar");

  const { token } = useContext(Context);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );
    promise.then((resposta) => {
      setApiHab(resposta.data);
    });
  }, []);

  function save(event) {
    event.preventDefault();
    const body = {
      name: form,
      days: arrayDay,
    };

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      body,
      config
    );
    promise
      .then((resposta) => {
        setLoading(<ThreeDots color="white" />);
        setLoading("Salvar");
        setAdd(!add);
        setArrayDay([]);
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  }

  function deleteHabit(element) {
    const delet = window.confirm("Deseja deletar o hábito?");
    if (delet) {
      const promise = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${element}`,
        config
      );
      promise
        .then(() => {
          const arrayHabit = apiHab.filter(({ id }) => {
            if (id !== element) return id;
          });
          setApiHab(arrayHabit);
        })
        .catch((erro) => console.log(erro.message));
    }
  }

  return (
    <>
      <Topo />
      <Main>
        <div className="topo_main">
          <h1>Meus hábitos</h1>
          <button className="buttonAdd">
            {" "}
            <img
              onClick={() => {
                setAdd(!add);
              }}
              src={mais}
            />{" "}
          </button>
        </div>
        {add && (
          <form onSubmit={save}>
            <input
              type="text"
              name="name"
              onChange={(e) => setForm(e.target.value)}
              placeholder={"nome do hábito"}
            />
            <ul>
              <Days name="D" numb={0} />
              <Days name="S" numb={1} />
              <Days name="T" numb={2} />
              <Days name="Q" numb={3} />
              <Days name="Q" numb={4} />
              <Days name="S" numb={5} />
              <Days name="S" numb={6} />
            </ul>
            <div>
              <p
                onClick={() => {
                  setAdd(!add);
                }}
                className="cancel"
              >
                Cancelar
              </p>
              <button>{loading}</button>
            </div>
          </form>
        )}
        {apiHab.length === 0 ? (
          <p className="notification">
            Você não tem nenhum hábito <br /> cadastrado ainda. Adicione um
            hábito <br /> para começar a trackear!
          </p>
        ) : (
          <></>
        )}
        <HabitosDaSemana>
          {apiHab.map((element, index) => {
            return (
              <div className="HabitDel" key={index}>
                <div className="info">
                  <h2>{element.name}</h2>

                  <img src={Del} onClick={() => deleteHabit(element.id)} />
                </div>
                <ul>
                  <Habi check={element.days.includes(0)} name={"D"} />
                  <Habi check={element.days.includes(1)} name={"S"} />
                  <Habi check={element.days.includes(2)} name={"T"} />
                  <Habi check={element.days.includes(3)} name={"Q"} />
                  <Habi check={element.days.includes(4)} name={"Q"} />
                  <Habi check={element.days.includes(5)} name={"S"} />
                  <Habi check={element.days.includes(6)} name={"S"} />
                </ul>
              </div>
            );
          })}
        </HabitosDaSemana>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 400;
    font-size: 23px;

    color: #126ba5;
  }

  .topo_main {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
  }

  .buttonAdd {
    width: 40px;
    height: 35px;

    border: none;

    background: #52b6ff;
    border-radius: 4.8px;
  }

  p {
    font-weight: 400;
    font-size: 18px;

    color: #666666;
  }

  ul {
    width: 305px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
  }

  input {
    width: 303px;
    height: 35px;

    border: 1px solid;
    border-color: #d4d4d4;

    border-radius: 8px;
  }

  input::placeholder {
    padding-left: 11px;
    font-size: 20px;

    color: #dbdbdb;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: 15px;

    gap: 5px;

    width: 340px;
    height: 180px;

    background: #ffffff;
    border-radius: 5px;
  }

  button {
    width: 84px;
    height: 35px;

    font-weight: 400;
    font-size: 16px;

    color: #ffffff;

    border: none;

    background-color: #52b6ff;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    width: 303px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
    gap: 23px;
  }

  .cancel {
    font-weight: 400;
    font-size: 16px;

    color: #52b6ff;
  }

  .notification {
    margin-top: 30px;
  }
`;

const HabitosDaSemana = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #e5e5e5;

  .HabitDel {
    margin-top: 15px;

    background: #ffffff;
    border-radius: 5px;

    gap: 5px;

    width: 100%;
    height: 91px;

    padding: 0 10px 0 10px;

    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;

    ul {
      width: 300px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 4px;
    }

    .info {
      display: flex;
      justify-content: space-between;
      h2 {
        font-size: 20px;
        color: #666666;
        margin-left: 2px;
      }
    }
  }
`;
