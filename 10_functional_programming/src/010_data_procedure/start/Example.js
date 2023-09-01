const Example = () => {
  // const nums = [1, 2, 3];
  // const sum = () => nums.reduce((accu, curr) => accu + curr);

  // 関数型プログラミング
  // Accumilation（蓄積）=> accu
  // current => curr
  // 状態を生成させておき、
  const nums = [1, 2, 3, 4];
  // やりたいカタチにするための関数を作る。
  const sum = (arr) => { 
    return arr.reduce((accu, curr) => accu + curr)
  };

  // オブジェクト指向プログラミング
  const numObj = {
    nums: [1, 2, 3, 4],
    sum() {
      const nums = this.nums;
      let sumVal = 0;
      nums.forEach(n => { sumVal += n })
      return sumVal;
    }
  };
  return (
    <>
      <h3>状態管理と処理を分離</h3>
      <p>状態（データ）と処理（やりたいこと）は切り離す</p>
      <p>{`result: ${numObj.sum()}`}</p>
      <p>{`result: ${sum(nums)}`}</p>

    </>
  );
};

export default Example;
