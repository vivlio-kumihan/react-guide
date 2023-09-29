
const AnimalFilter = ({ filterValState }) => {
  // propsを受け取って分割代入で解凍する。
  const [filterVal, setFilterVal] = filterValState;
  const input = (e) => { setFilterVal(e.target.value) };
  
  return (
    <input type="text" value={filterVal} onChange={input} />
  );
};

export default AnimalFilter;