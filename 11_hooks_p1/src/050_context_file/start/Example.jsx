// // 1. ラジオ・ボタンでテーマを切り替える。
// // * 配列THEMESの内容をmapを使ってlistとして出力する。
// // * ラジオ・ボタンの『checked属性』を『真偽値』で切り替えるには『state』を使う。
// // * 切り替えは『onChange属性』を使う。
// import { useState } from "react";
// import "./Example.css";

// const Example = () => {
//   const [theme, setTheme] = useState('light')
//   const changeTheme = (e) => setTheme(e.target.value)
//   const THEMES = ['light', 'dark', 'red'];

//   return (
//     <>
//       <header className={`content-${ theme }`}>
//         {
//           THEMES.map(_theme => {
//             return (
//               <label htmlFor="">
//                 <input type="radio" 
//                         key={ _theme } 
//                         value={ _theme } 
//                         checked={ theme === _theme } 
//                         onChange={ changeTheme }
//                 />  
//                 { _theme }
//               </label>
//             )
//           })
//         }
//       </header>
//       <main className={`content-${theme}`}>
//         <h1>テーマの切り替え</h1>
//       </main>
//     </>
//   );
// };

// export default Example;


// // 2. コンポーネントに切り分けていく。
// // Header, Mainコンポーネントへ切り分け。

// // stateを持ち運びさせる準備。
// // * 『<header></header>』,『<main></main>』のJSXをそれぞれのコンポーネントに移設。
// // * createContext関数を呼び出してインスタンス化する。
// // * <ThemeContext.Provider>コンポーネントを設置しvalue属性にstateを設置する。
// // * Header, MainコンポーネントをimportしてJSXへ設置する。

// import { createContext, useState } from "react";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import "./Example.css";

// export const ThemeContext = createContext();

// const Example = () => {
//   const [theme, setTheme] = useState('light')

//   return (
//     <>
//       <ThemeContext.Provider value={ [theme, setTheme] }>
//         <Header />
//         <Main />
//       </ThemeContext.Provider>
//     </>
//   );
// };

// export default Example;

// 3. 
// import { createContext, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeProvider } from "./context/ThemeContext";

import "./Example.css";

const Example = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
};

export default Example;

////////////////////////////////
