import Bye from "./components/Bye"
import Hello from "./components/Hello"

// // 1. propsの流れは一方通行
// const Example = () => {
//   const name = "nobuyuki";
//   return (
//     <>
//       <Hello name={ name } />
//       <Bye name={ name } />
//     </>
//   );
// };
// export default Example;

// // 2. propsは読み取り専用
// const Example = () => {
//   const name = "nobuyuki";
//   return (
//     <>
//       <Hello name={ name } />
//       <Bye name={ name } />
//     </>
//   );
// };
// export default Example;


// 3. propsの設定を確認する
const Example = () => {
  const name = "nobuyuki";
  return (
    <>
      <Hello name={ name } />
      <Bye name={ name } />
    </>
  );
};
export default Example;
