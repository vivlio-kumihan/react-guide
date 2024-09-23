const Example = () => {
  // 関数型（純粋関数）
  // ・fn(決まった引数) -> 決まった戻り値
  // ・関数外の状態（データ）は参照・変更しない。
  // ・関数外に影響を及ぼさない。
  // POINT 引数で渡された値を変更しない。（Immutabilityの保持）
  // 上記の要件を満たさない操作は「副作用」と呼ぶ。
  /*
  引数で渡された値を変更してしまっている。
  関数プログラミングでは引数で渡された値を変更してはいけない。
  */
  // // 1. 引数で渡された元の値を変更してしまっている
  // const num = { val: 2 }
  // // numの値を2倍にする関数を定義
  // const double = (num) => {
  //   num.val = num.val * 2;
  //   return num;
  // }
  // const newNum = double(num);
  // console.log("newNum", newNum);
  // console.log("num", num);

  // 2. Immutabilityの保持しているコード
  const num = { val: 2 }
  // numの値を2倍にする関数を定義
  const double = (num) => {
    // 引数で渡ってきた値を別名にすることでImmutabilityの保持する。
    // スプレッド演算子で別名にする。
    const newNum = { ...num };
    newNum.val = num.val * 2;
    return newNum;
  }
  const newNum = double(num);
  console.log("newNum", newNum);
  console.log("num", num);
  console.log(num === newNum);
  


  // const newNum = { val: num.val * 2 };

  // const newNum = double(num);
  // console.log('newNum', newNum, 'num', num)
  // console.log(newNum === num);
  return (
    <>
      <div>Immutability: { double }</div>
    </>
  );
};

export default Example;
