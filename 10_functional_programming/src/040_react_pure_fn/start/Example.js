let value = 0;

const Child = () => {
  value++;
  return (
    <div>{value}</div>
  )
}
// 2. 親から送信されたpropsを受診して、
const ChildPure = ({ value }) => {
  return (
    // 3. JSXで出力準備。
    <div>{value}</div>
  )
}
const Example = () => {
  // 4. 親コンポーネントのスコープの範囲内で変数を定義し直して、
  let value = 0
  return (
    <>
    <div>{value}</div>
    <Child /> 
    <Child /> 
    <Child /> 
    {/* 1. propsを設定して、 */}
    {/* 6. あとは、出力する。 */}
    <ChildPure value={++value} /> 
    <ChildPure value={++value} /> 
    <ChildPure value={++value} /> 
    </>
  );
};
export default Example;

// jsの知識
// ++value 1から始める
// value++ 0から始める


// 1. グローバルな範囲で変数を定義して、
let value = 0;

// 2. 子コンポーネントに変数の値に1を足す仕掛けを作り、
const Child = () => {
  value++;
  return (
    <div>{value}</div>
  )
}

// コンポーネントは純関数で定義しないといけない原則
// コンポーネントは、propsを受け取ってJSXで返す。
// だから、コンポーネント外で初期化した変数を使ってはいけない。
// 実証してみる。
const Example = () => {
  return (
    <>
    <div>{value}</div>
    {/* 子コンポーネントを刺すと意図しない挙動をする。
        1を足した値、つまり1が三つを期待しているのに。。。1 2 3 と出力してしまう。 */}
    <Child /> 
    <Child /> 
    <Child /> 
    </>
  );
};
export default Example;
