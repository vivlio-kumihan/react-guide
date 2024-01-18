import "./Child.css";

const Child = ({
    color: df = "green",
    num,      //=> 数値
    greet,      //=> 関数
    bool,     //=> 真偽値
    obj,      //=> 数値
    pid,      //=> 数値
    price     //=> 数値
  }) => {
  return (
    <div className={`component ${df}`}>
      <h3>Hello Component</h3>
      <h3>{num}</h3>
      <h3>{greet("Takahiro")}</h3>
      <h3>{bool ? "True" : "False"}</h3>
      <h3>{obj.myName}</h3>
      <h3>{obj.age}</h3>
      <h3>{pid}</h3>
      <h3>{price}</h3>
    </div>
  );
};

export default Child;
