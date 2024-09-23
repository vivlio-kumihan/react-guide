// import { useTheme } from "../context/ThemeContext";

// const Main = () => {
//   // 関数からの値は配列じゃないよ。
//   const theme = useTheme();
//   console.log("Main => 再レンダリングされた。");
//   return (
//     <main className={ `content-${ theme }` }>
//       <h3>テーマの切り替え</h3>
//     </main>
//   );
// };

// export default Main;

import { useTheme } from '../context/ThemeContext';

const Main = () => {
  const theme = useTheme();
  return (
    <main className={`content-${theme}`}>
      <h3>Main component</h3>
    </main>
  );
};

export default Main;
