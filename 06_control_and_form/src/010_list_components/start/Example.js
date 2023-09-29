const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const listItem = animals.map((animal) => <li key={animal}>lovely {animal}</li>)
  // const listItem = animals.map(animal => <li key={animal}>lovely {animal}</li>)

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {listItem}
      </ul>
    </>
  );
};

export default Example;
