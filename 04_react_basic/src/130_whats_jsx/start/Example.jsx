// // 1. JSX => JSの関数として展開される仕組み
// import React from "react";
// const Example = () => {
//   const sample1 = <h1 className="greeting">Hello World</h1>;

//   // JSXの参照を格納した変数を出力して中身を見る。
//   console.log(sample1);
//   // Babelページの「Try it out」で、上と同じJSXを投げるとBabelがReactに渡す『関数』が見える。
//   // それをママ、Reactのコードからその関数を実行すると当たり前だが同じ値が返ってくる。
//   // JSX => Babelで関数に変換 => Reactで関数が実行され『仮想DOM』が展開されるという仕組み。
//   // [Babelへのリンク]
//   // https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact&prettier=false&targets=&version=7.18.3&externalPlugins=&assumptions=%7B%7D
//   console.log(
//     React.createElement("h1", { className: "greeting" }, "Hello World"));
// };
// export default Example;

// 2. JSの関数をReact要素
import React from "react";

const Example = () => {
  const sample2 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you.</h2>
    </div>
  );
  console.log(
    (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you.</h2>
      </div>
    )
    // ).props
  );
  // React要素はツリー形状でWEBページを表現する。
  return React.createElement(
          "div",
          null,
          React.createElement("h1", null, "Hello!"),
          React.createElement("h2", null, "Good to see you.")
  );
};
export default Example;
