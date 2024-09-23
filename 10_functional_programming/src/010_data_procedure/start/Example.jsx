/*
* 手続型（命令型）プログラミング => オブジェクト指向型プログラミング（Class、継承）
  * Class、継承を利用してコードを整理するプログラミング

* 宣言型プログラミング => 関数型プログラミング（関数）
  * 関数を利用してコードを整理するプログラミング
  * 手続型の制御を関数に分離（隠蔽）して、やりたいことに集中するプログラミング手法

// 手続型
  const doubleNum = () => {
    let nums = [1,2,3];
    let doubleNums = [];
    for (let i = 0; i < nums.length; i++) {
      let double = nums[i] * 2;
      doubleNums.push(double);
    }
  };

  * ループ制御：mapメソッドが担当
  * やりたいこと：関数で定義

  // 関数型
  const doubleNumFn = () => {
    let nums = [1,2,3];
    let doubleNus = nums.map(num => num * 2);
  };

関数型
・値の状態管理と処理を分離
　状態と処理は切り離す
・純粋関数（副作用を排除する）
　特定の入力には特定の出力を返す
・不変性（Immutability）
　一度設定した値は書き換えない
*/

const Example = () => {
  // POINT 関数型
  // （値の）状態（data）と処理（A(), B(), C()）を分離して管理
  // 関数にデータを渡し、それを順次重ねて結果を得る。
  // A(data) -> B(data) -> C(data) -> 結果
  // ★ 状態と処理は切り離す
  const nums = [1,2,3];
  // // 1.
  // const sum = (array) => {
  //   const nums = array;
  //   let sumValue = 0;
  //   for(let i = 0; i < nums.length; i++) {
  //     sumValue += nums[i];
  //   }
  //   return sumValue;
  // };

  // // 2.
  // const sum = (array) => {
  //   const nums = array;
  //   let sumValue = 0;
  //   nums.forEach(num => {
  //     sumValue += num;      
  //   });
  //   return sumValue;
  // };

  // // 3-1.
  // const sum = (array) => {
  //   const nums = array;
  //   let sumValue = nums.reduce((acc, curr) => {
  //     return acc + curr 
  //   }, 0);
  //   return sumValue;
  // };

  // 3-2.
  const sum = (array) => {
    // let sumValue = array.reduce((acc, curr) => {
    //   return acc + curr;
    // }, 0);
    // return sumValue;
    return array.reduce((acc, curr) => acc + curr);
  };


  // POINT オブジェクト指向型
  // 状態（データ）と処理を対で管理
  // オブジェクト自体にデータを保存しておいて、オブジェクトのメソッドで処理をする。
  // 自分自身にデータを保持し、その処理も自分自身が持っているものを使う。
  // obj.method(); -> 結果
  const numObj = {
    nums: [1,2,3],
    sum() {
      const nums = this.nums;
      let sumValue = 0;
      for(let i = 0; i < nums.length; i++) {
        sumValue += nums[i];
      }
      return sumValue;
    }
  }

  return (
    <>
      <div>オブジェクト指向型:{numObj.sum()}</div>
      <div>関数型:{sum(nums)}</div>
    </>
  )
};

export default Example;