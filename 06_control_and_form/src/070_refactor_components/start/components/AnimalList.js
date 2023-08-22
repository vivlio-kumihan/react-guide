// 2. AnimalListコンポーネントを作成する。
// 5. propsのpetArrayを受信する。
const AnimalList = ({ petArray }) => {
  return (
    // 1. Example親コンポーネントから持ってきたJSXを貼り付ける
    <ul>
      {/* 4. petArrayがないと言われるので、 */}
      { petArray
        // 7. AnimalListは単純に渡ってきた値をリストとして表示するだけの機能に限定するべき、
        // フィルターを使って値を変更する機能は親コンポーネントに持たせる。
        // なのでpetArrayにフィルターをかけている箇所をExpamleへ渡す。
        // .filter((pet) => {
        //   const petStr = pet ?? ""
        //   // 6. filterValが見つからないと言われる。
        //   const isMatch = petStr.indexOf(filterVal) !== -1;
        //   return isMatch;
        // })
        .map((pet) => {
          return (
            <li key={ pet }>
              { pet ?? "nullがあります。データをpwd修正してください。" }
              { pet === "Dog" && "★" }
            </li>
          )
        })
      }
    </ul>
  )
}
// 3. 自信をexportする。
export default AnimalList