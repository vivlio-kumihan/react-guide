const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalsList = animals.map((animal) => 
    <li key={animal}>{animal}</li>
  );
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {animalsList}
      </ul>
    </>
  );
};

export default Example;
