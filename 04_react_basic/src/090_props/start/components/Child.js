import "./Child.css";

const Child = (props) => {
  console.log(props);
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <h3>{props.num}</h3>
      <h3>{props.greet("Takahiro")}</h3>
      <h3>{props.bool ? "True" : "False"}</h3>
      <h3>{props.obj.myName}</h3>
      <h3>{props.obj.age}</h3>
      <h3>{props.pid}</h3>
      <h3>{props.price}</h3>
    </div>
  );
};

export default Child;