import  AnimalItem from "./AnimalItem"

const AnimalList = ({ animals }) => {
  if (animals.length === 0) { return <h4>その文字列では見つかりません。</h4>; }
  
  return (
    <ul>
      {animals
        .map((animal) => {
          return <AnimalItem animal={animal} key={animal} />;
        })}
    </ul>
  );
};

export default AnimalList;