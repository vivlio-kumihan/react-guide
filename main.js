// const target = document.querySelectorAll("div > h1");
// const target = document.querySelector("div + h1");
// const target = document.querySelector("div ~ h1");

// // オブジェクト形式でコンソールにDOMオブジェクト（Element, Node）の中身を表示できる。

// // ドキュメントを探ってみる。

// // const html = document.querySelector("html");
// console.dir(document.children);
// // HTMLCollection(1)
// //   0: html
// //   length: 1
// console.dir(document.children[0].children);
// // HTMLCollection(2)
// //   0: head
// //   1: body
// //   length: 2

// console.dir(document.childNodes);
// // NodeList(2)
// //   0: <!DOCTYPE html>
// //   1: html
// //   length: 2

// // エレメントを探ってみる。

// const target = document.querySelectorAll("h1");
// console.dir(target);
// // NodeList(1)
// //  0: h1
// //  length: 1
// console.dir(target[0]); //=> h1
// console.dir(target[0].textContent); //=> heading1

const target = document.querySelector(".container");
console.dir(target.children);
//=> HTMLCollection(3)
console.dir(target.firstElementChild);
//=> h1
console.dir(target.lastElementChild);
//=> p

const point = document.querySelector(".point");
console.dir(point.previousElementSibling.textContent);
//=> before heading
console.dir(point.nextElementSibling.textContent);
//=> this is after pragraph
