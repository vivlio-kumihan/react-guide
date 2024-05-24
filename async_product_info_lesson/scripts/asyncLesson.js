// function callAsync(func, msg, ms) {
//   setTimeout(() => {
//     func(msg);
//   }, ms);
// }

// callAsync(console.log, "hello", 1000);

// callAsync((msg) => {
//   console.log(msg);
//   callAsync((msg) => {
//     console.log(msg);
//     callAsync((msg) => {
//       console.log(msg);
//     }, "hello, hello, hello", 1000);
//   }, "hello, helllo", 1000)
// }, "hello", 1000)


// function callAsync(func, msg, ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       func(msg);
//       resolve();
//     }, ms);
//   });
// }

// callAsync(console.log, "hello", 1000)
//   .then(() => {
//     return callAsync(console.log, "hello,hello", 1000)
//   })
//   .then(() => {
//     return callAsync(console.log, "hello,hello,hello", 1000)
//   })
//   .then(() => {
//     return callAsync(console.log, "hello,hello,hello,hello", 1000)
//   });


// function callAsync(func, msg, ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       func(msg);
//       resolve();
//     }, ms);
//   });
// }
  
// async function aswrap() {
//   await callAsync(console.log, "hello", 1000)
//   await callAsync(console.log, "hello,hello", 1000)
//   await callAsync(console.log, "hello,hello,hello", 1000)
//   await callAsync(console.log, "hello,hello,hello,hello", 1000)
// }

// aswrap();

const source = document.querySelector("#source");
const hOne = document.querySelector(".title");
const wrap = document.querySelector(".wrap");
const li = document.querySelector("li");

// 関数は『呼んで』『持ってきて』『発火』させる。『console.log』
// コールバック関数 => なんかの『処理をした値』を『返す』関数なんだ。『() => {};』
function moveElement(callback, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback();
      resolve();
    }, ms);
  });
}

async function moveElementTrigger() {
  await moveElement(() => hOne.prepend(source), 1000);
  await moveElement(() => hOne.append(source), 1000);
  await moveElement(() => hOne.after(source), 1000);
  await moveElement(() => wrap.append(source), 1000);
  await moveElement(() => li.after(source), 1000);
}

moveElementTrigger();