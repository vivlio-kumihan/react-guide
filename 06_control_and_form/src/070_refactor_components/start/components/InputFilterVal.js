// 12. InputFilterValコンポーネントの作成。
// 13. ExampleコンポーネントからStateをprops経由で受け取る。
const InputFilterVal = ({ filterState }) => {
  // 14. 受け取ったState（状態）が格納されているpropsを分割代入して展開する。
  const [filterVal, stateFilterVal] = filterState
  return (
    <input
      type="text"
      value={ filterVal }
      onChange={ (e) => stateFilterVal(e.target.value) }
    />
  )
}
export default InputFilterVal