import Topo from "../Topo/Topo";
import Bottom from "../Bottom/Bottom";
import styled from "styled-components";

export default function Historico() {
  return (
    <>
      <Topo />
      <Main>
        <h2>Histórico</h2>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </Main>
      <Bottom />
    </>
  );
}

const Main = styled.main`
  margin-top: 100px;
  margin-bottom: 8px;
  padding: 0 18px;
  h2 {
    font-size: 22px;
    color: #126ba5;
  }
  p {
    margin-top: 17px;
    font-size: 18px;
    color: #666666;
  }
`;
