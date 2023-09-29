const AnimalItem = ({ animal }) => {

  return (
    // warrningが出ておかしいと思ったが、
    // 子コンポーネントにつけてはダメなんだね。
    // 親につける。
    // <li key={animal}>
    <li>
      {animal}{animal === "Dog" && "★"}
    </li>
  );
};

export default AnimalItem;