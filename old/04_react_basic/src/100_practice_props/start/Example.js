import Profile from "./components/Profile";

// データを渡すときの形。
// 配列にオブジェクトを入れるやり方。
const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK" },
];

const Example = () => {
  return (
    <div>
      {/* 通常のpropsの渡し方 */}
      <Profile
        name={profile[0].name}
        age={profile[0].age}
        country={profile[0].country}
      />
      {/* 分割代入する渡し方 */}
      <Profile {...profile[1]} />
      {/* デフォルト変数で表示させるやり方 */}
      <Profile />
    </div>
  );
};

export default Example;
