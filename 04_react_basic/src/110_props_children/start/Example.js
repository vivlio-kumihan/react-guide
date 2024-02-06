import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      {/* その1 */}
      <Container title="childrenで渡す">
        {/* childrenで子孫関係を構成して、propを受け渡す。 */}
        {/* オブジェクトの分割代入でpropsを子コンポーネントへ送る。 */}
        <Profile {...profile[0]} />
        <Profile {...profile[1]} />
      </Container>

      {/* その2 */}
      <Container title="属性の値（配列）として渡す"
        // コンポーネントはオブジェクト。
        // オブジェクトを配列にして渡すReactのいつものやり方
        // 配列で渡す場合は『key』が必要。
        children={
          [
            <Profile key={profile[0].name} {...profile[0]} />,
            <Profile key={profile[1].name} {...profile[1]} />
          ]
        }
      />

      {/* その3 */}
      <Container title="個別に渡せる"
        // 任意の属性を作って個別に渡すことができる。
        // いきなりこの記述を見ても理解できない。
        // こう言う渡し方はchildrenでpropsを渡していく根本からの流れを理解しないといけない。
        first={<Profile key={profile[0].name} {...profile[0]} />}
        second={<Profile key={profile[1].name} {...profile[1]} />}
      />
    </div>
  );
};

export default Example;
