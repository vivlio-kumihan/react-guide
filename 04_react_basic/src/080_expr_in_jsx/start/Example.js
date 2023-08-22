import Child from "./components/Child"

const Example = () => {
  return (
    <>
      {/* { color: "red" } というオブジェクトを送信 */}
      <Child />
      <Child color="red" />
    </>
  )
}

export default Example