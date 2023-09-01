const Example = () => {
  // 関数型（純粋関数）は、
  // 引数で渡された値を変更しない。
  // Immutabilityの保持という。
  const num = { val: 2 }
  const double = (num) => {
    num = { ...num }
    num.val = num.val * 2;
    return num;
  }
  const newNum = double(num);
  console.log('newNum', newNum, 'num', num)
  // => newNum {val: 4} num {val: 2}
  console.log(newNum === num)
  return (
    <>
      <h3>Immutability(不変性)</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
    </>
  );
};
export default Example;
