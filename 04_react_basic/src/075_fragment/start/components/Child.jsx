import "./Child.css";

// // case1: <React.Fragment></React.Fragment>
// import React from "react";

// // case2: <Fragment></Fragment>
// import { Fragment } from "react";

// // case3: <></>
// nothing

const Child = () => {
  return (
    // <React.Fragment>
    //   <div className="component">
    //     <h3>Hello Component</h3>
    //   </div>
    //   <h3>Hello Fragment</h3>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
    //     repellat dolor doloribus iure consequatur soluta? Optio corrupti ratione
    //     suscipit recusandae eius perspiciatis illo corporis? Aliquam nam
    //     repellendus quos expedita est?
    //   </p>
    // </React.Fragment>
    
    // <Fragment>
    //   <div className="component">
    //     <h3>Hello Component</h3>
    //   </div>
    //   <h3>Hello Fragment</h3>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
    //     repellat dolor doloribus iure consequatur soluta? Optio corrupti ratione
    //     suscipit recusandae eius perspiciatis illo corporis? Aliquam nam
    //     repellendus quos expedita est?
    //   </p>
    // </Fragment>

    <>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        repellat dolor doloribus iure consequatur soluta? Optio corrupti ratione
        suscipit recusandae eius perspiciatis illo corporis? Aliquam nam
        repellendus quos expedita est?
      </p>
    </>
  );
};

export default Child;
