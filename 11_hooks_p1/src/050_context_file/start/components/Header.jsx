// // 2.
// import { useContext } from "react";
// import { ThemeContext } from "../Example";

// // 1. useContext関数にExampleコンポーネントからexportされたThemeContext変数を分割代入で展開する。
// // 2. ExampleコンポーネントのonChange関数は、こちらのコンポーネントへ移設。

// const Header = () => {
//   const [theme, setTheme] = useContext(ThemeContext);
//   const changeTheme = (e) => setTheme(e.target.value)
//   const THEMES = ['light', 'dark', 'red'];

//   return (
//     <>
//       <header className={`content-${theme}`}>
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
//     </>
//   );
// };
// export default Header;


// // 3.
// import { useContext } from "react";
// import { ThemeContext } from "../Example";

// const Header = () => {
//   const [theme, setTheme] = useContext(ThemeContext);
//   const changeTheme = (e) => setTheme(e.target.value)
//   const THEMES = ['light', 'dark', 'red'];

//   return (
//     <>
//       <header className={`content-${theme}`}>
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
//     </>
//   );
// };
// export default Header;

////////////////////////////////////

import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [theme, setTheme] = useTheme();
  const THEMEs = ["light", "dark", "red"];
  const changeTheme = (e) => {
    return setTheme(e.target.value);
  };

  return (
    <>
      <header className={`content-${theme}`}>
      {
        THEMEs.map((_theme) => {
          return (
            <label htmlFor={_theme} key={_theme}>
              <input 
                id={_theme}
                type="radio"
                value={_theme}
                checked={_theme === theme}
                onChange={changeTheme}
              />
              {_theme}
            </label>
          )
        })
      }
      </header>
    </>
  );
};

export default  Header;

