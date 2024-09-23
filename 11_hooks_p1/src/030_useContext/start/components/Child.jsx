// import GrandChild from "./GrandChild";

// const Child = () => (
//   <div style={{ border: "1px solid black", padding: 10 }}>
//     <h3>子コンポーネント</h3>
//     <GrandChild />
//   </div>
// );

// export default Child;

// // 1. useState
// import GrandChild from "./GrandChild";
// const Child = ({ word }) => {
// // const Child = ({ word, inputWord }) => {
//   return (
//     <div className="wrapper">
//     <h3>Child Comp</h3>
//     <GrandChild word={ word } />
//     {/* <GrandChild word={ word } inputWord={ inputWord } /> */}
//     </div>
//   );
// };

// export default Child;

// 2. useContext
import GrandChild from "./GrandChild";

const Child = () => {
  return (
    <>
      <div className="wrapper">
        <h3>ChildComp</h3>
        <GrandChild />
      </div>
    </>
  );
};

export default Child;