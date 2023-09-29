import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];
  const [searchChar, setSearchChar] = useState("");
  const input = (e) => { setSearchChar(e.target.value) };

  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" onChange={(input)} />
      <ul>
        {
          // 検索結果を出してから何かしらの処理をはさみ、できたインスタンスを返したい場合。
          animals
            .filter(animal => {
              // 検索に一文字でも正解があったら`0`を返す。そして`-1`でなければ`true`を返す。
              const isMatch = animal.indexOf(searchChar) !== -1;
              // とりあえず、`console.log`を挟んでみる。
              console.log(animal.indexOf(searchChar))
              console.log(isMatch)
              // 処理結果をreturnで返すことは必須。
              return isMatch
            })
            .map((animal) => (
              <li key={animal}>{animal}</li>
            ))
        }
      </ul>
    </>
  );
};

export default Example;
