/*
Immutable
  * 書き換えが不可（元の値は変わらない）
  * String, Number, BigInt, Boolean, undefined, Symbol
  * 例えば、
  * let val = 0; => 値を上書きする => val = 1;
  * 変数が参照している『0』というNumberが『1』に『変わったわけではない』
  * 変数の参照する先が変わっただけ。
Mutable
  * 書き換えが可能（元の値が変わる）
  * Object
  * let val = [1,2,3]; => 配列の変更 => val.push(4);
  * 変数が参照する先『[]』は変わらない。
  * 配列の中身（『元の値』）が変わっている。

val = [1,2];
  => 
function(val) {
  retrun [...val, 3];
  （オブジェクトの場合だったら　retrun { ...val, hoge: 123 }）
}
  => 
[1,2,3]
*/

// POINT Reactと純粋関数

// // 関数の外側で定義した変数を使用してはいけない。
// let value = 0;

// const Child = () => {
// // 1. childコンポーネントで外部変数の値を返る処理をする。
//   value++;
//   return <div>{ value }</div>
// }

// const Example = () => {
//   return (
//     <>
//       // 2. 親コンポーネントで子を呼び出す。
//       //     イメージとしては、1が3つ出て欲しい。だが、1、2、3と出力されてしまう。
//　　　　//  => 純粋関数は引数に対して必ず同じ値を返す必要がある。
//       <Child/>
//       <Child/>
//       <Child/>
//     </>
//   );
// };

// export default Example;

// 関数の外側で定義した変数を使用してはいけない。
// propsで渡すのはマスト。
// 子コンポーネントでは提携作業を書く。ここで値を変化させる仕組みを入れない。
// 出力用のフォーマットを書くだけ。
const ChildPure = ({ value }) => {
  return <div>{ value }</div>
};

const Example = () => {
  // コンポーネント内で変数を定義して、
  let value = 0;
  return (
    <>
      {/* 引数を渡したら同じ値が返ってくる。 */}
      {/* つまり、3つとも『0』と表示したい。 */}
      <ChildPure value={ value } />
      <ChildPure value={ value } />
      <ChildPure value={ value } />
      {/* 私た引数に1を足した値を渡したら、想定した値が返ってくる。 */}
      {/* 1回目では、0に1足した値を渡し、*/}
      {/* 2回目では1に1を足した値を渡し、 */}
      {/* 3回目では2に1を足した値を渡す。 */}
      {/* 連番で表示したいという意図通り、また、どこでその操作をしていたかもよく見える。 */}
      <ChildPure value={ ++value } />
      <ChildPure value={ ++value } />
      <ChildPure value={ ++value } />
    </>
  );
};

export default Example;