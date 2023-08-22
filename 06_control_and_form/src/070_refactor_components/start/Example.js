import { useState } from "react";
import AnimalList from "./components/AnimalList"

const Example = () => {
  const petArray = ["Dog", "Cat", null ,"Rat"]
  const [filterVal, stateFilterVal] = useState("")
  // 7. AnimalListコンポーネントから移築したフィルターを配置。
  const FliteredAnimal = petArray.filter((pet) => {
          const petStr = pet ?? ""
          {/* 6. filterValが見つからないと言われる。 */}
          const isMatch = petStr.indexOf(filterVal) !== -1;
          return isMatch;
        })
  return (
    <>
      <input
        type="text"
        value={ filterVal }
        onChange={ (e) => stateFilterVal(e.target.value) }
      />
      {/* 4. petArrayをpropsとして送信する。 */}
      {/* <AnimalList animals={ petArray } /> */}
      
      <AnimalList petArray={ FliteredAnimal } />
    </>
  );
};

export default Example;