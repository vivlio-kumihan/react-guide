import { useState } from "react";
import AnimalList from "./Components/AnimalList";
import AnimalFilter from "./Components/AnimalFilter";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];
  const [filterVal, setFilterVal] = useState("");
  const filterdAnimals = animals.filter((animal) => {
      const isMatch = animal.indexOf(filterVal) !== -1;
      return isMatch;
    });

  return (
    <>
      <AnimalFilter filterState={[filterVal, setFilterVal]} />
      <AnimalList animals={filterdAnimals} />
    </>
  );
};

export default Example;
