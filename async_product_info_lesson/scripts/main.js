const me = document.querySelector("#me");
console.log(me.children);
console.log(me.firstElementChild);
console.log(me.lastElementChild);
console.log(me.nextElementSibling);
console.log(me.previousElementSibling);
console.log(me.previousElementSibling);
console.log(me.parentElement);
console.log(me.nextElementSibling.firstElementChild);
console.log(me.previousElementSibling.lastElementChild);

const mainTitle = document.querySelector("#main-title");
mainTitle.textContent = "タイトル";

const subTitle = document.querySelector(".sub-title");
subTitle.innerHTML = "<strong>サブタイトル</strong>"

const childrenElems = document.querySelectorAll(".child");
const orderThree = document.querySelector(".order-3");

for(const child of childrenElems) {
  if (child.classList.contains("order-1")) {
    orderThree.after(child);
  } else if (child.classList.contains("order-2")) {
    const clone = child.cloneNode(true);
    me.prepend(clone);
  }
  child.style.color = child.dataset.color;
}

const meRect = me.getBoundingClientRect();
const commentBody = document.querySelector("#comment-body");
commentBody.prepend(`
  #meのborderの上端とHTMLの上端の間隔は、${ me.offsetTop }pxです。
  #meのborderの左端とHTMLの左端の間隔は、${ me.offsetLeft }pxです。
  ビュー・ポートの上端から#meの枠線の上端までの間隔は、${ meRect.y }pxです。
  ビュー・ポートの左端から#meの枠線の左端までの間隔は、${ meRect.x }pxです。
  #meのborderを含めた横幅は、${ me.offsetWidth }pxです。
  #meのborderを含めた高さは、${ me.offsetHeight }pxです。
`)

