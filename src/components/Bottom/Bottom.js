import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";
import Context from "../Context";

export default function Bottom() {
  const navigate = useNavigate();
  const { habitoFeito, porcento, habitoDia, setPorcento } = useContext(Context);

  useEffect(() => {
    setPorcento((habitoFeito.length / habitoDia.length) * 100);
  }, [habitoFeito]);

  return (
    <Footer>
      <p onClick={() => navigate("/habitos")}>Hábitos</p>
      <div>
        <button onClick={() => navigate("/hoje")}>
          {" "}
          <CircularProgressbar
            value={porcento}
            text="Hoje"
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52b6ff",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </button>
      </div>
      <p onClick={() => navigate("/historico")}>Histórico</p>
    </Footer>
  );
}

const Footer = styled.footer`
  position: fixed;
  width: 100%;
  height: 70px;

  left: 0px;
  bottom: 0px;

  background: #ffffff;

  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-weight: 400;
    font-size: 18px;

    color: #52b6ff;
  }

  div {
    padding-bottom: 35px;
  }

  button {
    width: 91px;
    height: 91px;

    border: none;

    font-weight: 400;
    font-size: 25px;

    color: #ffffff;

    border-radius: 50%;
    background: #52b6ff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .CircularProgressbar {
    text-align: start;
  }
`;
