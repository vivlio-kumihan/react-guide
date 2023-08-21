import Profile from "./components/Profile"
import  Button  from "./components/Button"
import { List } from "./components/List"

import "./Example.css"

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
  ]
  return (
    <>
      <h1 className="title">hello, hello, hello</h1>
      <List />
      <Button className="toggle-btn" />
      <ul>
      { persons.map((person) => (
        <li key={ person.name }>
          <Profile { ...person } />
        </li>
      )) }
      </ul>
    </>
  );
};

export default Example;
