import { useState } from "react";
import Profile from "./components/Profile";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [searchChar, setSearchChar] = useState("");
  const input = (e) => { setSearchChar(e.target.value) }
  return (
    <>
      <input type="text" onChange={input} />
      <ul>
        {
          persons
            // 1行でも書けるんだが、
            // .filter((person) => person.name.indexOf(searchChar) !== -1)
            // あえて無名関数的に書いてみる。
            .filter((person) => {
              const isMatch = person.name.indexOf(searchChar) !== -1;
              return isMatch;
            })
            // 無名関数の定義だから{}で囲んでる。
            .map((person) => (
              <li key={person.name}>
                <Profile {...person} />
              </li>
            ))
        }
      </ul>
    </>
  );
};

export default Example;
