// ////////////
// 1. Listコンポーネント内の各項目をItemコンポーネントに分離する。
// 2. タイトルをダブルクリックするとタイトルを変更できるようにする。
//    * <span>{todo.content}</span>をダブルクリックしたら編集可能状態、
//      つまり更新関数で値を変更できるようにするという考え方。
//    * 編集中か否かの判断をするためのトリガーが必要。
//      これは、元のtodoListに属性を追加する。『editing: false』
//    * 三項演算子で、input要素と<span>{todo.content}</span>を振り分ける。
//    * 入力内容をダブルクリックしたらinput要素に切り替わる仕様はonDubleClick属性。
//    * 入力欄をenterして状態を更新して確定させる。form要素で囲んで発火。
// ////////////

import { useState } from "react";

const Item = ({ todo, upDateTodo, complete }) => {
  // ダブルクリックして編集状態にした時の入力内容を状態にする。
  // 初期値は最初に入力した内容。
  const [editingContent, setEditingContent] = useState(todo.content);
  // 更新用関数
  const chnageContent = (e) => {
    setEditingContent(e.target.value);
  };
  // ダブルクリックしたらstateのtodoの更新用関数を使って、editing属性の真偽値を書き換える必要がある。
  // さりげなく出てくるが、stateは複製して上書き。
  // stateのtodoを定義した親まで戻り更新用関数を生成、prposでここまで伝播させて発火させる。
  // 親のTodoコンポーネントへ戻って編集の旅に行くよ。
  const toggleEditMode = () => {
    // editing属性の真偽値を書き換えたtodoの要素を新規で生成させておいて、
    const newTodo = { ...todo, editing: !todo.editing };
    // 更新用関数で書き換え。
    upDateTodo(newTodo);
  };
  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = { ...todo, content: editingContent, editing: !todo.editing };
    upDateTodo(newTodo);
  };

  return (
    <div> 
      <button onClick={() => {
        return complete(todo.id)
      }}>完了
      </button>
      <form onSubmit={confirmContent} style={{display: "inline"}}>
        {
          todo.editing ? (
            <input type="text"
                    // value属性には変更した値
                    value={editingContent}
                    // 更新用関数を値にして発火させる
                    onChange={chnageContent}
            />
          ) : (
            <span onDoubleClick={toggleEditMode}>{todo.content}</span>
          )
        }
      </form>
    </div>
  );

};

export default Item;
