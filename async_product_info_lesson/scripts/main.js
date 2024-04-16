// ターゲットになる要素のDOM取得
const cElm = document.querySelector(".create-element");
// 新規で作成するDOM
const span = document.createElement("span");
span.textContent = "Hello, PHP!";
// ターゲットのDOMに差し込む
cElm.append(span);

// 埋め込むテンプレートリテラルを作成する。
const contents = `
  <article id="article">
    <h1 id="article__title">記事のタイトル</h1>
    <div class="article__tag-erea">
      <span>タグ：</span>
      <span>スポーツ</span>
      <span>野球</span>
      <span>阪神</span>
    </div>
    <div class="article__body">記事の本文</div>
    <div id="recommend" class="article__recommend">
      <h2>おすすめの記事</h2>
      <a href="#">他の記事</a>
    </div>
  </article>
`;

// 入れ替え容器になるDOMを生成。
// DOMに中身を入れて、側を外して中身だけ返す関数を定義する。
function htmlStrToElement(htmlStr) {
  const div = document.createElement("div");
  div.innerHTML = htmlStr;
  return div.firstElementChild;
}

// htmlStrToElement()関数の引数にテンプレートリテラルを送り
// ターゲットになる要素へ注ぐ。
const targetNewElement = htmlStrToElement(contents);
document.querySelector(".inner-html").prepend(targetNewElement);
