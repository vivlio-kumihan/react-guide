import Profile from "./components/Profile.js";

const Example = () => {
  const memberList = [
    { name: "Geo", age: 18, hobby: ["sports", "music"] },
    { name: "Tom", age: 25, hobby: ["movie", "music"] },
    { name: "Lisa", age: 21, hobby: ["sports", "travel", "game"] }
  ];

  // 1. 
  // ハッシュを値に持った配列を使ってリストを作成方法として、
  // これを外注に出す際は、map関数で回し、値一つ一つを呼びながら分割代入する。

  return (
    <>
      <ul>
        {
          memberList.map((member) => (
            <li key={member.name}>
              <Profile {...member} />
            </li>
          ))
        }
        {/* {listItem} */}
      </ul>
    </>
  );
};

export default Example;