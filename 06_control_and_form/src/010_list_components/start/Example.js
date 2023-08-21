// ### 配列の値をJSXで出力してみる
// const animals = ["Dog", "Cat", "Rat"]
// const Example = () => {
//   return (
//     <>
//       <h3>配列の操作</h3>
//       <ul>
//         <li>{ animals[0] }</li>
//         <li>{ animals[1] }</li>
//         <li>{ animals[2] }</li>
//       </ul>
//     </>
//   )
// }
// export default Example

// ### 一般的なやり方にしてみる その1 for(ins of array)
// const animals = ["Dog", "Cat", "Rat"]
// const Example = () => {
//   let animalList = []
//   for(const animal of animals) {
//     animalList.push(<li>{ animal }</li>)
//   }
//   return (
//     <>
//       <h3>配列の操作</h3>
//       <ul>
//         { animalList }
//       </ul>
//     </>
//   )
// }
// export default Example

// ### 一般的なやり方にしてみる その2 map
// const animals = ["Dog", "Cat", "Rat"]
// const Example = () => {
//   const animalList = animals.map(animal => <li>Hello, { animal }!</li>)
//   return (
//     <>
//       <h3>配列の操作</h3>
//       <ul>
//         { animalList }
//       </ul>
//     </>
//   )
// }
// export default Example

// ### mapは式なのでJSX内に記述することができるのでコードを修正する。
const animals = ["Dog", "Cat", "Rat"]
const Example = () => {
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        { animals.map(animal => <li>Hello, { animal }!</li>) }
      </ul>
    </>
  )
}
export default Example

