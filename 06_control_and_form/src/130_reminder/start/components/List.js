const List = ({ todos, deleteTodo }) => { 
  const complete = (id) => {
    deleteTodo(id);
  };

  return (
    <>
      {
        todos.map(item => {
          return (
            <div key={item.id}>
              <button onClick={() => complete(item.id)}>完了</button>
              <span>{item.content}</span>
            </div>
          )
        })
      }
    </>
  );
};

export default List;