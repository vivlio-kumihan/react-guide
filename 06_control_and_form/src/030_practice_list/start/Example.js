import Profile from "./components/Profile";
import WhatEver from "./components/WhatEver";

const Example = () => {
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
      name: "takahiro",
      age: 21,
      hobbies: ["sports", "travel", "game"],
    },
  ];
  return (
    <>
      <ul>
      { persons.map((person) => (
        <li key={ person.name }>
          <Profile { ...person } />
        </li>
      )) }
      </ul>
      <WhatEver />
    </>
  );
};

export default Example;
