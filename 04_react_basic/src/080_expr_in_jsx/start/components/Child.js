import "./Child.css";

const Child = ({ color = "green" }) => {
  return (
    <>
    {/* HTML => class="component red" */}
    {/* 文字列の中で変数展開をするからこういう記号になる。 */}
    <div className={`component ${ color }`}>
      <h3>Hello Component</h3>
    </div>
    </>
  );
};

export default Child;
