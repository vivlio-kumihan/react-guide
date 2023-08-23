import ListItem from "./ListItem";

const AnimalList = ({ petArray }) => {
  // 10. エラー処理をしておく
  // petArrayに値がない場合の処理を書く
  if (petArray.length === 0) {
    return <p>入力されたペットが見つかりません。</p>
  }
  return (
    <ul>
      { petArray
        .map((pet) => {
          return (
            // 15. ListItemからkeyを移動する。
            // <ListItem pet={ pet }/>
            <ListItem pet={ pet } key={ pet }/>
          )
        })
      }
    </ul>
  )
}
export default AnimalList