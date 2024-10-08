import Todo from "./components/Todo"

const Example = () => {
  return (
    <>
    <h3>練習問題</h3>
    <ol>
      <li>Listコンポーネント内の各項目をItemコンポーネントに分離しましょう。</li>
      <li>タイトルをダブルクリックするとタイトルを変更出来るようにしましょう</li>
      <li>ReducerとContextを使ってTodoをグローバルなステートにしましょう</li>
    </ol>
      <h2>Reminder</h2>
      <Todo />
    </>
  );
};

export default Example;
