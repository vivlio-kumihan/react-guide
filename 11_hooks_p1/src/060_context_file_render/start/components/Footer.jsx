// import { useUpdateTheme } from "../context/ThemeContext";

// const Footer = () => {
//   // 更新関数setThemeを設置する。
//   // 更新用関数だけを設置しているコンポーネントは再レンダリングする必要はない。
//   // useTheme()メソッドは、Footerコンポーネントに更新用関数だけを設置していることを知らない。
//   // なので問答無用で再レンダリングされてしまう。
//   const setTheme = useUpdateTheme();
//   // 再レンダリングされたらコンソールに出力される。
//   console.log("Footer => 再レンダリングされた。");
//   return (
//     <footer>
//       <h3>フッター</h3>
//     </footer>
//   );
// };

// export default Footer;


import { useUpdateTheme } from '../context/ThemeContext';

const Footer = () => {
  const setTheme = useUpdateTheme();
  return (
    <>
      <footer>
        <h3>Footer component</h3>
      </footer>
    </>
  );
};

export default Footer;