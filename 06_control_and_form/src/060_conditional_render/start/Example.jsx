import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      {/* 1. ifでやってみる */}
      {/* <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => {
            if (animal === "Dog") {
              return <li key={animal}>{animal}★</li>
            } else {
              return <li key={animal}>{animal}</li>
            }
          })
        }
      </ul> */}
      {/* 2. 三項演算子でやってみる */}
      {/* <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => {
            return <li key={animal}>
            { animal + (animal === "Dog" ? "★" : "")}
            </li>
          })
        }
      </ul> */}
      {/* 3. &&演算子でやってみる */}
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => {
            return <li key={animal}>
            {/* これだとfalseが文字列として出力されてしまう。 */}
            {/* { animal + (animal === "Dog" && "★")} */}
            {/* JSXの中で展開するJS扱い。=> 真偽値は画面上に表示されない。 */}
            { animal ?? "記載なし" }{ animal === "Dog" && "★" }
            </li>
          })
        }
      </ul>
    </>
  );
};

export default Example;
