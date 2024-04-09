// // 1秒後に「Data fetch」とコンソールに出力する
// // fetchData()関数を定義しなさい。
// // 引数には無名関数を使用しなさい。

// // 非同期関数の初期
// // 非同期処理の連続での取り扱いが煩雑になるのでPromiseが生まれた。
// function fetchData(callback, msg, ms) {
//   setTimeout(() => {
//     callback(msg);
//   }, ms)
// }

// fetchData(msg => {
//   console.log(msg);
//   fetchData(msg => {
//     console.log(msg);
//     fetchData(msg => {
//       console.log(msg);
//       fetchData(msg => {
//         console.log(msg);
//       }, "hello,hello,hello,hello", 1000)
//     }, "hello,hello,hello", 1000)
//   }, "hello,hello", 1000)
// }, "hello", 1000) 


// // Promiseを使う
// // 非同期を扱う関数の定義は同じ
// // Promiseの生成する際の『引数』に非同期関数を入れる。
// // resolve, rejectに入る値（関数、オブジェクト、配列、変数）は
// // then, catchの引数として取り扱われる。
// // この例のように空でも構わない。
// // then, catchを発火させるトリガーの役割もあるから。
// function fetchData(callback, msg, ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       callback(msg);
//       resolve();
//       reject();
//     }, ms);
//   });
// }

// fetchData(console.log, "hello", 1000)
//   .then(() => {
//     return fetchData(console.log, "hello,hello", 1000);
//   })
//   .then(() => {
//     return fetchData(console.log, "hello,hello,hello", 1000);
//   })
//   .then(() => {
//     return fetchData(console.log, "hello,hello,hello,hello", 1000);
//   })
//   .catch((error) => {
//     console.error(`error: ${ error }`)
//   });

// async, awitを使う
function fetchData(callback, msg, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback(msg);
      resolve();
      reject();
    }, ms);
  });
}

// asyncをこの関数の前につけることで『非同期関数』を定義できる。
// new Promiseでインスタンスを生成する必要はない。
// resolve => try, reject => catch
// そして、finallyで処理できる。
// awaitをつけることで該当の非同期処理関数の処理が終わってから次の処理を促すキーワード
async function getData() {
  try {
    await fetchData(console.log, "hello", 1000);
    await fetchData(console.log, "hello,hello", 1000);
    await fetchData(console.log, "hello,hello,hello", 1000);
    await fetchData(console.log, "hello,hello,hello,hello", 1000);
  } catch (error) {
    console.error(error);
  } finally { console.log("処理を終了します。")}
}

getData();


// function run(personName) {
//   return new Promise((resolve, reject) => {
//     const time = Math.floor(Math.random() * 11);
//     setTimeout(() => {
//       if (time % 4 === 0) {
//         reject({ personName });
//       } else {
//         resolve({ personName, time });
//       }
//     }, time);
//   });
// }

// const printResult = ({ personName, time }) => {
//   console.log(`${ personName }が、${ time }秒でゴール！`);
// };

// async function excute() {
//   try {
//     let result = await run("太郎");
//     printResult(result);
//     result = await run("次郎");
//     printResult(result);
//     result = await run("三郎");
//     printResult(result);
//   } catch({ personName }) {
//     console.error(`${ personName }が転倒しました！　レースのやり直しです。`)
//   }
// }

// excute();