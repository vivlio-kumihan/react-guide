const tc = document.getElementById("text-content");
const ih = document.getElementById("inner-html");

const str = "<strong>textContentとinnerHTML</strong>";
tc.textContent = str;
ih.innerHTML = str;

const ws = document.getElementById("get-inline");

console.log(ws.textContent);
//=> hello, textContent and innerHTML 
console.log(ws.innerHTML);
//=> main.js:11 hello, textContent and <strong>innerHTML</strong> 