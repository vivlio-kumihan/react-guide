import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", undefined, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            // 対象のオブジェクトに値が入っていない場合のエラー対策
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => {
            // // 条件分岐　その1
            // if (animal === "Dog") {
            //   return <li key={animal}>{animal}★</li>
            // } else {
            //   return <li key={animal}>{animal}</li>
            // }

            // // 条件分岐　その2-1
            // return <li key={animal}>{animal === "Dog" ? animal + "★" : animal}</li>

            // // 条件分岐　その2-2
            // return <li key={animal}>{animal + (animal === "Dog" ? "★" : "")}</li>

            // 条件分岐　その3
            // これでは、falseがそのまま出力される。
            // return <li key={animal}>{animal + (animal === "Dog" && "★")}</li>
            // 式をオブジェクト・リテラルで囲むと真偽値を出力しない。
            // return <li key={animal}>{animal}{animal === "Dog" && "★"}</li>

            // 条件分岐　その4　null合体演算子
            // A ?? B
            // A => null or undefinedの場合に、Bの値をとる。
            // エラーがあった場合に明示する処理も書ける。
            return <li key={animal}>{animal ?? "nullまたはundefined"}{animal === "Dog" && "★"}</li>
          })
        }
      </ul>
    </>
  );
};

export default Example;
