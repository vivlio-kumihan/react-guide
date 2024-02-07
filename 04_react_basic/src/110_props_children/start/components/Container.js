import "./Container.css";

const Container = ({ title, children, first, second }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      {/* {children} */}
      <div>{second}</div>
      <div>{first}</div>
      {/* <div>{children}</div> */}
    </div>
  );
};

export default Container;
