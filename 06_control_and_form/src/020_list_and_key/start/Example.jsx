
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const helloAnimals = animals.map((animal) => {
    return <li key={animal}>Hello {animal}</li>;
  });

  return (
    <>
      <ul>
        {helloAnimals}
      </ul>
    </>
  );
};

export default Example;