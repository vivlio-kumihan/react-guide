import { createContext, useContext, useReducer } from 'react';

// 状態管理のインスタンスを生成させる。
// state管理
const CounterContext = createContext();
// 更新関数管理
const CounterDispatchContext = createContext();

// プロバイダーを生成させる。
const CounterProvider = ({ children }) => {
  // JSX実行の際に必要となるstateと更新関数を設定元のExapmle.jsxから移譲する。
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error('不明なactionです。')
    }
  }, 0);  

  return (
    <CounterContext.Provider value={ state }>
      <CounterDispatchContext.Provider value={ dispatch }>
        { children }
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
};

// 先頭で定義していた状態管理のインスタンス、
// state管理 => 『CounterContext』と、
// 更新関数管理 => 『CounterDispatchContext』
// に『随時の状態』を他のコンポーネントで出力できるように関数化する。
const useCounter = () => {
  return useContext(CounterContext)
};
const useCounterDispatch = () => {
  return useContext(CounterDispatchContext)
};

// 他のコンポーネントで使うことができるように出力しておく。
export { CounterProvider, useCounter, useCounterDispatch };