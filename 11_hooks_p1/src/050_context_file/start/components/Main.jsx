// 2.
// import { useContext } from "react";
// import { ThemeContext } from "../Example";

// // Headerコンポーネントと同じ要領で設定。

// const Main = () => {
//   const [theme] = useContext(ThemeContext);

//   return (
//       <main className={`content-${theme}`}>
//         <h1>テーマの切り替え</h1>
//       </main>
//   );
// };

// export default Main;


// // 3.
// import { useContext } from "react";
// import { ThemeContext } from "../Example";

// const Main = () => {
//   const [theme] = useContext(ThemeContext);

//   return (
//       <main className={`content-${theme}`}>
//         <h1>テーマの切り替え</h1>
//       </main>
//   );
// };

// export default Main;

///////////////////////////////////

import { useTheme } from "../context/ThemeContext";

const Main = () => {
  const [theme] = useTheme();
  return (
    <main className={ `content-${ theme }` }>
      <h3>テーマの切り替え</h3>
    </main>
  );
};

export default Main;