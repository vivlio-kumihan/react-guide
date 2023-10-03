// Q1. FirstButtonのbackgroudをpinkにしてください。
// Q2. FirstButtonを継承したSecondButtonを作成し、backgroudをredに、colorをwhiteにしてください。{" "}
// Q3. SecondButtonを継承したThirdButtonを作成し、props.darkがある場合のみbackgroudがblackに、ない場合はgreenになるようにしてください。

import styled from "styled-components";
import { useState } from "react";

const FirstButton = styled.button`
  display: inline-block;
  width: 11rem;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  font-weight: bold;
  background-color: pink;
  border-radius: 3px;
  border: none;
`;

const SecondButton = styled(FirstButton)`
  color: #fff;
  background-color: red;
`;

const ThirdButton = styled(SecondButton)`
  background-color: ${({dark}) => dark ? "black" : "green"};
`;

const Example = () => {
  // const [dark, setDark] = useState(true);

  return (
    <>
      <FirstButton>ボタン1</FirstButton>
      <SecondButton>ボタン2</SecondButton>
      <ThirdButton>ボタン3</ThirdButton>
      <ThirdButton dark>ボタン4</ThirdButton>
    </>
  );
};

export default Example;
