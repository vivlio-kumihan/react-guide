// import { useEffect, useState } from 'react';

// const Example = () => {
//   const [checked, setChecked] = useState(false);

//   useEffect(() => {
//     // if (checked) {
//     //   window.alert("checked!");
//     // }
//     checked && window.alert("checked!");
//   }, [checked]);
//   return (
//     <>
//       <h3>練習問題</h3>
//       <p>
//         記述を変更し、完成コードのように、checkedがtrueの場合のみalertで「checked!」と表示されるようにしてください。useEffectを用いて実装してください。
//       </p>
//       <label>
//         <input type={'checkbox'} value={checked} onClick={() => setChecked((checked) => !checked)} />
//         click me
//       </label>
//     </>
//   );
// };

// export default Example;

import { useState, useEffect } from "react";

const Example = () => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(prev => !prev);
  };

  useEffect(() => {
    checked && window.alert("checked!");
  });
  
  return (
    <>
      <label htmlFor="">
        <input type="checkbox" value={ checked } onClick={ handleClick } />
        check!
      </label>
    </>
  );
};

export default Example;