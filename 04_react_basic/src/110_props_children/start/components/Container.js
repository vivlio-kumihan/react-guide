import "./Container.css";

const Container = ({ title, children, first, second }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      {children}
      <div>{first}</div>
      <div>{second}</div>
    </div>
  );
};

export default Container;
