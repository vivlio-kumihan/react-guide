import { ListOne, ListTwo, str } from "./List";

const Child = () => {
  return (
    <>
      <h3>Hello Component</h3>
      <ListOne />
      <ListTwo />
      <h3>{str}</h3>
    </>
  );
};

export default Child;