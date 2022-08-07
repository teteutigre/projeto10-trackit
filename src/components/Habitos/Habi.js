import styled from "styled-components";

export default function Habi({ check, name }) {
  return (
    <>
      <Li check={check}>{name}</Li>
    </>
  );
}

const Li = styled.li`
  width: 30px;
  height: 30px;

  background-color: ${({ check }) => (!check ? "#fff " : "#cfcfcf")};
  border-radius: 5px;

  font-weight: 400;
  font-size: 20px;

  color: ${({ check }) => (!check ? "#dbdbdb " : "#fff")};

  display: flex;
  justify-content: center;
  align-items: center;

  border: solid 1px;
  border-color: #d4d4d4; ;
`;
