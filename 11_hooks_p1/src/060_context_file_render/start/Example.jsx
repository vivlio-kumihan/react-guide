// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import { ThemeProvider } from "./context/ThemeContext";

// import "./Example.css";

// const Example = () => {
//   return (
//     <ThemeProvider>
//       <Header />
//       <Main />
//       <Footer />
//     </ThemeProvider>
//   );
// };

// export default Example;


import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ThemeProvider } from './context/ThemeContext'

import "./Example.css";

const Example = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Example;