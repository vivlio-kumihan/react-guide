import { useState } from "react";
import AnimalList from "./components/AnimalList";
import AnimalFilter from "./components/AnimalFilter";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];
  const [filterVal, setFilterVal] = useState("");
  const filterdAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  });

  return (
    <>
      {/* 状態を渡すときのやり方 */}
      {/* filterValの状態だから、filterValStateとしてみて、 */}
      {/* 定義した時と同じものじゃない。 */}
      {/* このコードの中に漂っているインスタンスを配列にしてJSXに詰め込んで */}
      {/* propsで送信する。 */}
      <AnimalFilter filterValState={[filterVal, setFilterVal]} />
      <AnimalList animals={filterdAnimals} />
    </>
  );
};

export default Example;