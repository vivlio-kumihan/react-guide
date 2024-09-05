import React from "react";
import "./Child.css";

const Child = () => {
  return (
    <React.Fragment>
      <Child />
      <h3>Hello Component</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus vero nam voluptatum, necessitatibus soluta est hic dicta nemo quasi sunt alias possimus, assumenda iste sed corrupti cupiditate amet nulla? Qui?</p>
    </React.Fragment>
  );
};

export default Child;