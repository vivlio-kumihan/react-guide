// // 1.
// const Hello = (props) => {
//   return (
//     <div>
//       <h3>Hello { props.name }</h3>
//     </div>
//   );
// };
// export default Hello;

// // 2.
// const Hello = (props) => {
//   // // 親から継承したpropsは書き換えられない。
//   // props.name = "hello";
//   return (
//     <div>
//       <h3>Hello { props.name }</h3>
//     </div>
//   );
// };
// export default Hello;

// 3. propsの設定を確認する.
const Hello = (props) => {
  // props.name = "hello";
  const desc = Reflect.getOwnPropertyDescriptor(props, "name");
  console.log(desc);
  return (
    <div>
      <h3>Hello { props.name }</h3>
    </div>
  );
};
export default Hello;

// 属性（隠し設定）を出力させるための命令
// Reflect.getOwnPropertyDescriptor([受け取った属性], "[キー]");

// コンソールに出力された値
// {value: 'nobuyuki', writable: false, enumerable: true, configurable: false}

// 設定可能かどうか、この場合はfalseということで不許可。
// configurable: false

// オブジェクトを展開できる、『for~in』のループで列挙対象になるかどうかについては可能。
// enumerable: true

// 値を上書きできるかどうか、この場合はfalseということで不許可。
// writable: false
