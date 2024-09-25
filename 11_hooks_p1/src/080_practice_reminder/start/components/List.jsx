// ////////////
// このコンポーネントですること。
// * 値がオブジェクトの状態をリスト表示
// * アイテムのオブジェクトを削除する更新関数を発火させる関数の定義
// ////////////

const List = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  };
  return(
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <button onClick={() => {
              return complete(todo.id)
            }}>完了
            </button>
            <span>{todo.content}</span>
          </div>
        )
      })}

    </div>
  );
};

export default List;