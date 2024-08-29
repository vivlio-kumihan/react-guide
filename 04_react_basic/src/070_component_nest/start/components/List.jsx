// 名前付きエクスポートでコンポーネントを出力する準備をしている。

const List = () => {
  return (
    <ul>
      <li>imte-1</li>
      <li>imte-2</li>
      <li>imte-3</li>
      <li>imte-4</li>
      <li>imte-5</li>
    </ul>
  );
};

const OrderedList = () => {
  return (
    <ol>
      <li>imte-1</li>
      <li>imte-2</li>
      <li>imte-3</li>
      <li>imte-4</li>
      <li>imte-5</li>
    </ol>
  );
};

export { List, OrderedList };
