// const idAttr = document.getElementById("idAttr");
// console.dir(idAttr);

// const clsAttrs = document.querySelectorAll(".classAttr");
// for (const elem of clsAttrs) {
//   console.log(elem);
// }

// const p = document.querySelectorAll("p");
// for (const elem of p) {
//   console.log(elem);
// }

// const elemText = document.querySelector('[type="text"]');
// console.log(elemText);

// const span = document.querySelector("span");
// console.log(span.closest("p"));

// const container = document.querySelector(".container");
// console.log(container.lastElementChild);

// 解答 6 h1タグの兄弟要素でtype属性がpasswordの要素 
// const headOne = document.querySelector("h1");
// const pwd = headOne.parentElement.querySelector('[type="password"]');
// console.log(pwd);
// document.querySelector("h1 ~ input[type='password']");

// 解答 7 id属性がidAttrの要素の子要素 
// const idAttr = document.getElementById("idAttr");
// console.log(idAttr.firstElementChild);
// const child = document.querySelector("#idAttr > *");
// または 
// const child = document.querySelector("#idAttr").firstElementChild;
// console.log(child);

// // 解答 8 inputタグのtype属性がtextの直後の要素
// // const text = document.querySelector('[type="text"]');
// // console.log(text.nextElementSibling);
// document.querySelector("input[type='text'] + *");
// // または 
// document.querySelector("input[type='text']").nextElementSibling;