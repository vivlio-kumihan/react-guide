import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  width: 120px;
  height: 60px;
  margin: auto;
  font-weight: bold;
  background-color: ${({isSelected}) => isSelected ? "pink" : ""};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: .3s;
`;

// StyledButtonを継承する書式
const OrangeButton = styled(StyledButton)`
  background-color: orange;
  /* 擬似要素を書く。 */
  :hover {
    opacity: .5;
  }
  /* 入れ子で書く。 */
  span {
    font-size: 2em;
  }
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);
  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton isSelected={isSelected} onClick={clickHandler}>button</StyledButton>
      {/* 継承したボタン */}
      <OrangeButton isSelected={isSelected} onClick={clickHandler}><span>button</span></OrangeButton>
    </>
  );
};

export default Example;