import { useState } from "react";

const Example = () => {
  const [check, setCheck] = useState(true);
  const checkToggle = (e) => {
    // toggleの仕組みはこうなっている。
    // 最終的には使わないが、
    // `e`には`check`したときには`true`、`check`を外したら`false`が入る。
    // console.log(e.target.value); => true or false
    console.log(e.target.value);
    // 摩訶不思議なんだが、
    // setCheckはuseStateのゲッター（更新関数）で、
    // 引数には現在この関数が注目している`e`が入ってきてくれる。
    // console.log(prevState); => true or false
    setCheck((prevState) => {
      // ここが`toggle`部分
      // 状態が`true`の時は`false`を、`false`の時は`true`を変数に格納し返す。
      let state = !prevState;
      return state;
    });

    // 1行最終的短縮系
    // const checkComponent = () => setCheck(prev => !prev);
  };


  
  return (
    <>
      <input  id="checkbox" 
              type="checkbox" 
              value={check} 
              onChange={checkToggle} 
              checked={check} />
      <label htmlFor="checkbox">
        {check ? <p>ON!</p> : <p>OFF!</p>}
      </label>
    </>
  );
};

export default Example;
