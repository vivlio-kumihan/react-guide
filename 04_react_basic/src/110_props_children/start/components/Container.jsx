import "./Container.css";

// 親で埋め込まれた別の子コンポーネントを『children』として受ける。
const Container = ({ title, children, first, second }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      {/* ここで分割代入された引数を受け取り展開という流れ。 */}
      {/* コンポーネントごとに色々ネタを仕込んで展開していける。便利さがやっとわかった。 */}
      <div>{ children }</div>
      <div>{ first }</div>
      <div>{ second }</div>
    </div>
  );
};

export default Container;
