// `HTML`要素を`DOM`にする。
const h1Element = document.querySelector('h1')

// `console.log()`を使うと何が取れたかがわかる。
console.log(h1Element)
// `console.dir()`を使うとDOMの内容がわかる。
console.dir(h1Element)
// DOMにアクセスして内容を変更してみる。
h1Element.textContent = '変更後のタイトル'

// クリック・イベントを使ってみる。
const btn = document.querySelector('button')

btn.addEventListener('click', (e) => {
  // 他のDOMの内容を変えてみる。
  h1Element.textContent = 'click'
  console.dir(e.target)
  // 自身のスタイルや内容を変更してみる。
  e.target.style.color = '#fff'
  e.target.style.backgroundColor = 'red'
  e.target.textContent = 'Color is Red'
})

// callback関数として実行することもできる。
const another = document.querySelector('.another')
const defMethod = (e) => {
  console.dir(e.target)
  e.target.style.color = '#fff'
  e.target.style.backgroundColor = 'red'
  e.target.textContent = 'Color is Red'
}
another.addEventListener('click', defMethod)