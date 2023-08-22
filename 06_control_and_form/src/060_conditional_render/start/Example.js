import { useState } from "react";

const Example = () => {
  const petArray = ["Dog", "Cat", null ,"Rat"];
  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={ filterVal }
        onChange={ (e) => setFilterVal(e.target.value) }
      />
      <ul>
        { petArray
          .filter((pet) => {
            const petStr = pet ?? ""
            const isMatch = petStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((pet) => {
            return (
              <li key={ pet }>
                { pet ?? "nullがあります。データをpwd修正してください。" }
                { pet === "Dog" && "★" }
              </li>
            )
          })
        }
      </ul>
    </>
  );
};

export default Example;
