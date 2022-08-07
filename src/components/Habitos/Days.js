import { useState, useContext } from "react";
import styled from "styled-components";
import Context from "../Context";

export default function Days({ name, numb }) {
  const [click, setClick] = useState(false);
  const { setArrayDay, arrayDay } = useContext(Context);

  function addDay(numb, click) {
    if (!click) {
      const days = [...arrayDay, numb];
      setArrayDay(days);
    } else {
      const days = arrayDay.filter((element) => {
        if (element !== numb) {
          return element;
        }
      });
      setArrayDay(days);
    }
  }

  return (
    <>
      <Li
        onClick={() => {
          setClick(!click);
          addDay(numb, click);
        }}
        click={click}
      >
        {name}
      </Li>
    </>
  );
}

const Li = styled.li`
  width: 30px;
  height: 30px;

  background-color: ${({ click }) => (!click ? "#fff " : "#cfcfcf")};
  border-radius: 5px;

  font-weight: 400;
  font-size: 20px;

  color: ${({ click }) => (!click ? "#dbdbdb " : "#fff")};

  display: flex;
  justify-content: center;
  align-items: center;

  border: solid 1px;
  border-color: #d4d4d4; ;
`;
