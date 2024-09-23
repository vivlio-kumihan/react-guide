
// import { useTheme, useUpdateTheme } from "../context/ThemeContext";

// const Header = () => {
//   // 関数からの値は配列ではない。
//   // stateと更新用関数の受け渡し。
//   const theme = useTheme();
//   const setTheme = useUpdateTheme();
//   const checked = (e) => {
//     return setTheme(e.target.value);
//   };
//   const THEMES = ["light", "dark", "red"];
//   console.log("Header => 再レンダリングされた。");    
//   return (
//     <header className={ `content-${ theme }` }>
//       {
//         THEMES.map(_theme => {
//           return (
//             <label htmlFor={ _theme } key={ _theme }>
//               <input 
//                 id={ _theme }
//                 type="checkbox" 
//                 value={ _theme }
//                 checked={ _theme === theme }
//                 onClick={ checked }
//               />
//               { _theme }
//             </label>
//           )
//         })
//       }
//     </header>    
//   );
// };

// export default Header;

import { useTheme } from '../context/ThemeContext';
import { useUpdateTheme } from '../context/ThemeContext';

const Header = () => {
  const theme = useTheme();
  const setTheme = useUpdateTheme();
  const changeTheme = (e) => {
    return setTheme(e.target.value);
  };
  const THEMEs = ["light", "dark", "red"];  
  return (
    <>
      <header className={`content-${theme}`}>
      {
        THEMEs.map((_theme) => {
          return (
            <label htmlFor={_theme} key={_theme}>
              <input 
                type="radio" 
                id={_theme}
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

export default Header;