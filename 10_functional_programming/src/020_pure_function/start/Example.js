const Example = () => {
  const val1 = 2, val2 = 3;
  // 関数の外で変数を定義し、結果が関数外へ飛び出てしまったり、
  let result;
  const add = (val1) => {
    result = val1 + val2; 
    // コンソール・ログを関数外のコンソールへ送信した入りすることが、
    // 副作用と呼ばれる操作になる。
    console.log(result)
    return val1 + val2; 
  };
  return (
    <>
      <h3>関数定義からひもとく</h3>
      <h4>引数を足し算する関数を作る</h4>
      <p>純粋関数: {add(val1, val2)}</p>
    </>
  );
};
export default Example;


// const Example = () => {
//   const val1 = 2, val2 = 3;
//   const add = (val1, val2) => {
//     return val1 + val2;
//   };
//   return (
//     <>
//       <h3>関数定義からひもとく</h3>
//       <h4>引数を足し算する関数を作る</h4>
//       <p>純粋関数: {add(val1, val2)}</p>
//     </>
//   );
// };
// export default Example;
