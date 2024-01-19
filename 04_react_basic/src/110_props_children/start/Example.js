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
        <Profile />
        {/* 設定した属性を渡したい場合には『変数展開』を利用して渡す */}
        <Profile {...profile[0]} />
        <Profile {...profile[1]} />
      </Container>
    </div>
  );
};

export default Example;
