/*
関数型（純粋関数）
* fn(決まった引数) -> 決まった戻り値
  純粋関数とは、関数に決まった引数を渡して、決まった戻り値を返す。
  そうするためには以下の条件が必要になる。
  * 関数外の状態（データ）は参照・変更しない。
    * 例えば、外部スコープの変数は関数内では使用しないことが条件になる。
  * 関数外に影響を及ぼさない。
  * 引数で渡された値を変更しない。

  上記の要件を満たさない操作は「副作用」と呼ぶ。
*/

/*
add関数の定義を通して純粋関数を見てみる。
1. 
add関数は決まった引数に対して、決まった値を返している。
`const val1 = 2, val2 = 3;`この部分の値を変えたら、期待した値が返るから。
*/
// const Example = () => {
//   const val1 = 2, val2 = 3;
//   const add = (val1, val2) => {
//     return val1 + val2;
//   };
//   return (
//     <>
//       <div>純粋関数:{ add(val1, val2) }</div>
//     </>
//   );
// };

/*
1-1.
『add関数は決まった引数に対して、決まった値を返す』条件をあえて破るコードを書く。
add関数の引数を減らしてみる。それによって内部の変数が外のスコープから値を読む状態を作る。
処理が引数に依存していない状態を作ってみる。
計算結果は同じだが、外部スコープの変数によって処理結果に影響を受けてしまっているので、
要件を満たさない操作と見られて『副作用』となる。
外部スコープの変数は関数内では使用しないことが条件である。
関数定義の中でスコープを超えた変数の値を参照している。これは純粋関数ではない。
*/

// const Example = () => {
//   const val1 = 2, val2 = 3;
//   const add = (val1) => {
//     return val1 + val2;
//   };
//   return (
//     <>
//       <div>純粋関数:{ add(val1) }</div>
//     </>
//   );
// };

// export default Example;


/*
2.
関数外に影響を及ぼさない。
関数の結果によって外部の変数の値が変わってしまう。
内部からコンソールを呼ぶということもだめ。

関数外で定義された変数resultを関数内で値を変更している。
またコンソールで読んでいる。
これは純粋関数ではないとなる。
*/
const Example = () => {
  const val1 = 2, val2 = 9;
  let result;
  const add = (val1) => {
    result = val1 + val2;
    console.log(result);
    return val1 + val2;
  };
  return (
    <>
      <div>純粋関数:{ add(val1, val2) }</div>
      <div>{ result }</div>
    </>
  );
};

export default Example;
