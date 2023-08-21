import Profile from "./components/Profile";
import { useState } from "react"

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
  const [filterVal, stateFilterVal] = useState("")
  return (
    <>
      <input type="text" value={ filterVal }
        onChange={(e) => {
          stateFilterVal(e.target.value)
        }
      } />
      <ul>
        { persons
          .filter(person => {
            return person.name.indexOf(filterVal) !== -1
            {/* const isMatch = person.name.indexOf(filterVal) !== -1 */}
            {/* return isMatch */}
          })
          .map(person => (
            <li key={ person.name }>
              <Profile { ...person } />
            </li>
          )) 
        }
      </ul>
    </>
  );
};

export default Example;
