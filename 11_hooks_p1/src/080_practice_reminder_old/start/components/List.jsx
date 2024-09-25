import Item from "./Item";

const List = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  }

  return (
    <div>
      {todos.map(todo => {
        return (
          <Item todo={todo} complete={complete}/>
        )
      })}
    </div>
  );
}

export default List;