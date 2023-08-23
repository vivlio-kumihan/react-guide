import { useState } from "react";
import AnimalList from "./components/AnimalList"
import InputFilterVal from "./components/InputFilterVal"

const Example = () => {
  const petArray = ["Dog", "Cat", null ,"Rat"]
  const [filterVal, stateFilterVal] = useState("")
  const FliteredAnimal = petArray.filter((pet) => {
          const petStr = pet ?? ""
          const isMatch = petStr.indexOf(filterVal) !== -1;
          return isMatch;
        })
  return (
    <>
      {/* 11. input要素もコンポーネント化する。 */}
      {/* InputFilterValコンポーネントを作成してコードを移動する。 */}
      {/* <input
            type="text"
            value={ filterVal }
            onChange={ (e) => stateFilterVal(e.target.value) }
          /> */}
      <InputFilterVal filterState={ [filterVal, stateFilterVal] }/>
      <AnimalList petArray={ FliteredAnimal } />
    </>
  );
};
export default Example;