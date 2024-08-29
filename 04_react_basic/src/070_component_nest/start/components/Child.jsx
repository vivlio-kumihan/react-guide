// 名前付きエクスポートを呼び込む。
import { List, OrderedList } from "./List";
import "./Child.css";

const Child = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List />
      <OrderedList />
    </div>
  );
};

export default Child;

