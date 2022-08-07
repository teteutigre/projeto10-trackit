import React from "react";
import logo from "../imgs/logoHeader.svg";
import styled from "styled-components";
import { useContext } from "react";
import Context from "../Context";

export default function Topo() {
  const { image } = useContext(Context);
  return (
    <Header>
      <img src={logo} />
      <img className="perfil" src={image} />
    </Header>
  );
}

const Header = styled.header`
  position: absolute;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  .perfil {
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
`;
