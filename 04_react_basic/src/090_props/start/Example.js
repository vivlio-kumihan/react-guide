import Child from "./components/Child";

const Example = () => {
  const num = 123;
  const greet = (name) => `hello ${name}!`;
  const obj = {
    name: "takahiro",
    age: 58
  };
  const otherObj = {
    pid: 12345,
    price: 5000
  };

  return (
    <>
      <Child />
      <Child color="red" />
    </>
  );
};

export default Example;
// import Child from "./components/Child";

// const Example = () => {
//   const num = 123;
//   const greet = (name) => `hello ${name}!`;
//   const obj = {
//     name: "takahiro",
//     age: 58
//   };
//   const otherObj = {
//     pid: 12345,
//     price: 5000
//   };

//   return (
//     <>
//       <Child 
//         num={num}
//         greet={greet}
//         bool
//         obj={obj}
//         {...otherObj}
//       />
//     </>
//   );
// };

// export default Example;
