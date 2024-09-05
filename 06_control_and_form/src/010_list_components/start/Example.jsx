const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  // // 1. for~in 最初に思いつくようにする。ただし使わないらしい。
  // const list = [];
  // for (const animal of animals) {
    //   list.push(<li>Hello, { animal }</li>);
    // }
    
  // 2. コールバック関数が返しているのはオブジェクトじゃない。
  //    この場合、複数行になった場合コードのまとまりを示す『()』をつける。
  const list =  animals.map((animal) => (
    <li>Hello, { animal }</li>
  ));

  // // 3. reduceでもやってみる
  // const list = animals.reduce((acc, animal) => {
  //   acc += `<li>Hello, ${ animal }</li>`;
  //   return acc;
  // }, "");

  return (
    <>
      <h3>配列の操作</h3>
      <ul>{ list }</ul>
      {/* 3の場合はこちらで出力 */}
      {/* <ul dangerouslySetInnerHTML={{ __html: list}}></ul> */}
    </>
  );
};

export default Example;
