// // 1.
// import { useState } from "react";

// const Example = () => {
//   const personObj = { name: "Tom", age: 18 };
//   // stateにオブジェクトで渡しているので、更新関数には同じ型であるオブジェクトを渡す。=>
//   const [person, setPerson] = useState(personObj);
//   const changeName = (e) => {
//     // => 更新関数には同じ型であるオブジェクトを渡す。
//     //    stateに渡している型と同じ形で値を渡さないとエラーになる。
//     // => 更新関数に『オブジェクト』を渡す場合、
//     //    オブジェクト・リテラルで囲み、新規でオブジェクトを生成して渡さなければならない。
//     //    このstateの変数const [person, setPerson] = useState(personObj);と、
//     //    更新する仕組みの中の変数は同じであってはならない。
//     setPerson({ name: e.target.value, age: person.age}); 
//   };
//   const changeAge = (e) => {
//     setPerson({ name: person.name, age: e.target.value }); 
//   };
//   // リセットは空の値を更新関数に渡すだけ。
//   const reset = () => {
//     setPerson({name: "", age: ""});
//   };
//   return (
//     <>
//       <h3>name: { person.name }</h3>
//       <h3>age: { person.age }</h3>
//       <form action="">
//         <input type="text" onChange={ changeName } value={ person.name } />
//         <input type="text" onChange={ changeAge } value={ person.age } />
//       </form>
//       <button onClick={ reset }>リセット</button>
//     </>
//   );
// };

// export default Example;


// 2.
import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  const changeName = (e) => {
    // これがオブジェクトを取り扱う際の留意点
    //   通常はこんな書き方はしない、
    //     setPerson({ name: e.target.value, age: person.age}); 

    //   stateの変数『person』にはオブジェクト『{ name: "Tom", age: 18 };』が格納されている。
    //   これを『スプレッド演算子』で『キーと値』を取り出す。
    //   そして、オブジェクト・リテラルで囲み新たなオブジェクトを生成する。
    //     『{ ...person }』
    console.log({ ...person } === person);
    //   { ...person, [変更対象のキー]: [変更する値] }とすると、
    //   『値が変更』されたpersonオブジェクトを『新規』で生成することができる。
    //   理解できると分かりやすく簡単な仕様。
    setPerson({ ...person, name: e.target.value }); 
  };
  const changeAge = (e) => {
    setPerson({ name: person.name, age: e.target.value }); 
  };
  const reset = () => {
    setPerson({name: "", age: ""});
  };
  return (
    <>
      <h3>name: { person.name }</h3>
      <h3>age: { person.age }</h3>
      <form action="">
        <input type="text" onChange={ changeName } value={ person.name } />
        <input type="text" onChange={ changeAge } value={ person.age } />
      </form>
      <button onClick={ reset }>リセット</button>
    </>
  );
};

export default Example;
