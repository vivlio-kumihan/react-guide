// const source = document.querySelector("#source");
// const headOne = document.querySelector("h1");
// const wrap = document.querySelector(".wrap");
// const list = document.querySelector("li:nth-of-type(2)")

// headOne.prepend(source);
// headOne.after(source);
// wrap.append(source);
// list.insertAdjacentElement("afterbegin", source);



// 間違っている考え方。
// 非同期関数の実行中に関数を作動させようとしていたこと。
// const source = document.querySelector("#source");
// const headOne = document.querySelector("h1");
// const wrap = document.querySelector(".wrap");
// const list = document.querySelector("li:nth-of-type(2)")

// const execute = (source) => {
//   return new Promise((resolve) => {
//     console.log("hello");
//     resolve(source);
//   }, 2000);
// };

// execute(source)
//   .then(elem => {
//     console.log(headOne);
//     headOne.prepend(elem);
//   })
//   .then(elem => {
//     console.log(headOne);
//     headOne.after(elem);
//   })
//   .then(elem => {
//     console.log(wrap);
//     wrap.append(elem);
//   })
//   .then(elem => {
//     console.log(list);
//     list.insertAdjacentElement("afterbegin", elem);
//   });


// 方針は、
// 大元でコールバック関数を実行させて引数無しでresolve()関数を呼ぶ。

const moveElem = (callback) => {
  return () => new Promise((resolve) => {
      setTimeout(() => {
        callback();
        resolve();
      }, 2000);
    });
}

const source = document.querySelector("#source");

const ans1 = moveElem(() => {
  const headOne = document.querySelector("h1");
  headOne.prepend(source);
});

const ans2 = moveElem(() => {
  const headOne = document.querySelector("h1");
  headOne.after(source);
});

const ans3 = moveElem(() => {
  const wrap = document.querySelector(".wrap");
  wrap.append(source);
});

const ans4 = moveElem(() => {
  const list = document.querySelector("li:nth-of-type(2)")
  list.insertAdjacentElement("afterbegin", source);
});

ans1()
  .then(ans2)
  .then(ans3)
  .then(ans4)
