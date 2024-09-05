import Profile from "./components/Profile";

const Example = () => {
  const person = [
    { name: "Geo", age: 18, hobby: ["sports", "music"] },
    { name: "Tom", age: 25, hobby: ["movie", "music"] },
    { name: "Lisa", age: 21, hobby: ["sports", "travel", "game"] }
  ];

  const list = person.map(({ name, age, hobby }) => {
    return (
      <li key={name}>
        <Profile name={name} age={age} hobby={hobby} />
      </li>
    );
  });

  return (
    <>
      <ul>{ list }</ul>
    </>
  );
};

export default Example;