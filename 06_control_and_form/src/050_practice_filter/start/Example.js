import { useState } from 'react';
import Profile from "./components/Profile";

const persons = [
  {
    name: "Geopo",
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
  const [filterVal, setFilterVal] = useState("");
  const handleFilterVal = (e) => {
    setFilterVal(e.target.value);
  };
  return (
    <>
      <input type="text" value={filterVal} onChange={handleFilterVal} />
      <ul>
        {
          persons.filter((person) => (
            console.log(person.name.indexOf(filterVal))
          ))
        }
        {persons
        .filter((person) => person.name.indexOf(filterVal) !== -1)
        .map((person) => (
          <li key={person.name}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
