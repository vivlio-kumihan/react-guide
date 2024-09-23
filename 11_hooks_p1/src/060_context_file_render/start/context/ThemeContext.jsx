// // このようにテーマの変更に関わる状態管理を外注に出すことで整理が容易になる。
// // stateと更新用関数についてFooter.jsxで書いた振る舞いを修正することも1箇所でできる。

// import { useState, createContext, useContext } from "react";

// // state用と更新関数ようで2つ用意する。
// export const ThemeContext = createContext();
// export const ThemeUpdateContext = createContext();

// // 以下は、このインスタンスで使える関数を定義
// export const useTheme = () => {
//   return useContext(ThemeContext);
// };
// export const useUpdateTheme = () => {
//   return useContext(ThemeUpdateContext);
// };

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("light");  
//   return (
//     <ThemeContext.Provider value={ theme }>
//       <ThemeUpdateContext.Provider value={ setTheme }>
//         { children }
//       </ThemeUpdateContext.Provider>
//     </ThemeContext.Provider>
//   );
// };


import { useState, createContext, useContext } from "react";
export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={setTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useUpdateTheme = () => {
  return useContext(ThemeUpdateContext);
};