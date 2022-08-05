import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Bottom() {
  const navigate = useNavigate();
  return (
    <Footer>
      <p onClick={() => navigate("/habitos")}>Hábitos</p>
      <div>
        <button onClick={() => navigate("/hoje")}>Hoje</button>
      </div>
      <p onClick={() => navigate("/historico")}>Histórico</p>
    </Footer>
  );
}

const Footer = styled.footer`
  position: absolute;
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
    padding-bottom: 16px;
  }

  button {
    width: 91px;
    height: 91px;

    border: none;

    font-weight: 400;
    font-size: 18px;
    text-align: center;

    color: #ffffff;

    border-radius: 50%;
    background: #52b6ff;
  }
`;
