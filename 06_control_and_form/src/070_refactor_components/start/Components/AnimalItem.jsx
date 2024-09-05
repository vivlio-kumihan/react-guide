const AnimalItem = ({ animal }) => {
  return (
    // コンポーネントとして切り出したので位置が変わる。
    // liの親要素、ul要素の直下、つまり<AnimalItem animal={animal} />にキーを付与しないといけない。
    <li>
      {animal}
      {animal === "Dog" && "★"}
    </li>
  );         
};

export default AnimalItem;