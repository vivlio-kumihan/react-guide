import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null ,"Rat"];

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
            animal
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;
