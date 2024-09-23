// import { useRef, forwardRef, useImperativeHandle } from "react";

// // common
// // コールバック関数でオブジェクトを返したい場合。
// // hogehoge(ref, () => ({}));
// // イコール
// // hogehoge(ref, () => {
// //   retrun hogehoge;
// // });


// // 前回までで、
// // Inputコンポーネントに対してrefオブジェクトを渡して、それをinput要素のref属性に与えることによって、
// // 親（Example）コンポーネントのbutton要素から子（Input）コンポーネントのDOMを操作する方法を学んだ。

// // refのcurrentに対してDOMが入ってくるのであらゆる操作が可能になる。
// // Inputコンポーネントの作者の意図しない使われ方をする場合がある。
// // この場合は、ボタン要素をクリックするとインプット要素にフォーカスを充てることに限定したい。

// // なので、useImperativeHandleを使ってrefを使った操作を限定する。
// const Input = forwardRef((props, ref) => {
//   // 親で定義されたrefとは別に、新たにrefを定義する。
//   const inputRef = useRef();
//   // 親から渡ってきたrefをuseImperativeHandle関数の引数に設定する。
//   // コールバック関数が返すオブジェクトのみを引数に取ることができる。
//   console.log("ref=> ",ref);
//   useImperativeHandle(ref, () => ({
//     // 使うメソッドを定義する。ただし、別名で定義する
//     // refを使用する記述を書いていく。
//     myFocus() {
//       inputRef.current.focus();
//       console.log("inputRef=> ",inputRef);
//     }

//   }));
//   // 新たに定義したrefをここに設定する。
//   return <input type="text" ref={inputRef} />;
// });

// const Example = () => {
//   const ref = useRef();
//   return (
//     <>
//       <Input ref={ref} />
//       <button onClick={() => ref.current.myFocus()}>
//         インプット要素をフォーカスする
//       </button>
//     </>
//   );
// };

// export default Example;




import { useRef, forwardRef, useImperativeHandle } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    myFocus() {
      inputRef.current.focus();
    }

  }));
  return <input type="text" ref={inputRef} />;
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.myFocus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
