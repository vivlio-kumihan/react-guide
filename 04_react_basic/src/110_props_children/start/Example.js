import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenを使ってみる">
      {"hello"}
      {"takahiro"}
      </Container>
      {/* <Container title="Childrenを使ってみる">
        <Profile />
        <Profile {...profile[0]} />
        <Profile {...profile[1]} />
      </Container> */}
    </div>
  );
};

export default Example;
