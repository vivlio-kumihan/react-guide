// // 配列にインデックスを指定して値を呼び出す。
// const arry = ["配列1", "配列2", "配列3"];
// console.log(arry[0]);
// console.log(arry[2]);

// // 同じことを分割代入してやってみる。配列では順番が大事。
// const [a, b, c] = ["配列1", "配列2", "配列3"];
// console.log(a);
// console.log(c);

// // オブジェクトで値を呼び出す。
// const obj = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(obj.x);
// console.log(obj.y);

// // オブジェクトで分割代入する。順番は関係ないので注意。オブジェクトのキーを書かないといけない。
// const {x, y, z} = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(x)
// console.log(z)

// 関数に対して分割代入
const arr = ["Japan", "Tokyo", "Shinjuku"];
// const fnArr = (arry) => {
//   console.log("---配列---");
//   console.log(`country: ${arry[0]}`);
//   console.log(`state: ${arry[1]}`);
//   console.log(`city: ${arry[2]}`);
// };
const fnArr = ([country, state, city]) => {
  console.log("---配列---");
  console.log(`country: ${ country }`);
  console.log(`state: ${ state }`);
  console.log(`city: ${ city }`);
}
fnArr(arr);
  
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };
// const fnObj = (objAddr) => {
//   console.log("---オブジェクト---");
//   console.log(`country: ${objAddr.country}`);
//   console.log(`state: ${objAddr.state}`);
//   console.log(`city: ${objAddr.city}`);
// };
const fnObj = ({ country, state, city}) => {
  console.log("---オブジェクト---");
  console.log(`country: ${ country }`);
  console.log(`state: ${ state }`);
  console.log(`city: ${ city }`);
};

fnObj(objAddress);
