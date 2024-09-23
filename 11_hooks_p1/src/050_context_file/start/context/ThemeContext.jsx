// 3.
// 親コンポーネントに渡す状態管理のプロバイダーと
// 子コンポーネントに渡す状態を展開する形で関数で用意する
// => createContext, useContext

// テーマ管理は、 ExampleコンポーネントからThemeProviderコンポーネントで状態を管理するように委譲する。
// それによってアプリとしての見通しをよくする。
import { useState, createContext, useContext  } from "react";

export const ThemeContext = createContext();

// 親コンポーネントで状態管理をするための枠組みを設定する。
// 親コンポーネントが引き取るのはこれ！
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={ [theme, setTheme] }>
      { children }
    </ThemeContext.Provider>
  );
};

// 子孫のコンポーネントで状態を持っていくための関数を定義する。
// 子孫のコンポーネントが引き取るのはこれ！
export const useTheme = () => useContext(ThemeContext);
