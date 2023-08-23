const ListItem = ({ pet }) => {
  return (
    // 15. 現状だとkeyがないと警告される。ここにあるのに。。。
    // 親コンポーネントにつけないといけないルールだそう。
    // 削除してAnimalListの該当部分へ配置する。
    // <li key={ pet }>
    <li>
      { pet ?? "nullがあります。データをpwd修正してください。" }
      { pet === "Dog" && "★" }
    </li>
  )
}
export default ListItem
　