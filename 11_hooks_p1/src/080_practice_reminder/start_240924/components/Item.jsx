// 1. stateを生成する
//    初期値は、渡ってきたcontentのtitle。
// 2. 編集中かどうかのflagをtodoListにつける。
//       const todosList = [
//         {
//           id: 1,
//           content: "店予約する",
//           editing: false
//         },
// 3. 現状入力した値を表示させる部分を三項演算子で編集可能にする
//    <span>{todo.content}</span> これを変更する。


import { useState } from "react";

const Item = ({ todo, complete, updateTodo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const changeContent = (e) => {
    setEditingContent(e.target.value);
  };

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    updateTodo(newTodo);
  };

  // formは特定のURLに対してリクエストを送信する。そうすると画面が更新される。それを防ぐための処理
  const comfirmContent = (e) => {
    e.preventDefault();
    // タイトルを更新する処理を入れる。
    const newTodo = { ...todo, editing: !todo.editing, content: editingContent };
    updateTodo(newTodo);
  };

  return (
      <div>
        <button onClick={() => complete(todo.id)}>完了</button>
        <form onSubmit={comfirmContent} style={{display: 'inline'}}>
        {/* 問2. タイトルをダブルクリックするとタイトルを変更出来るようにする。 */}
        {/* <span>{todo.content}</span> */}
        {
          todo.editing 
            ? (
              <input type="text"
                      value={editingContent}
                      onChange={changeContent} />
            )
            : (
              <span onDoubleClick={toggleEditMode}>{todo.content}</span>
            )
        }
        </form>
      </div>    
  );
};

export default Item;