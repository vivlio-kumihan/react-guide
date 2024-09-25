import { useReducer, createContext, useContext } from "react";

// コンテキストとプロバイダーの生成
const CalcContext = createContext()
const CalcDispatchContext = createContext()

const useCalc = () => {
  return useContext(CalcContext);
};
const useCalcDispatch = () => {
  return useContext(CalcDispatchContext);
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change": {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    case "add": {
      return { ...state, result: parseInt(state.a)  + parseInt(state.b) };
    }
    case "minus": {
      return { ...state, result: parseInt(state.a) - parseInt(state.b) };
    }
    case "divide": {
      return { ...state, result: parseInt(state.a) / parseInt(state.b) };
    }
    case "multiply": {
      return { ...state, result: parseInt(state.a) * parseInt(state.b) };
    }
    default:
      throw new Error("operator is invalid");
  }
};

const CalcProvider = ({ children }) => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };
  const [state, dispatch] = useReducer(reducer, initState);  
  return (
    <>
      <CalcContext.Provider value={state}>
        <CalcDispatchContext.Provider value={dispatch}>
          {children}
        </CalcDispatchContext.Provider>
      </CalcContext.Provider>
    </>
  );
};

export { CalcProvider, useCalc, useCalcDispatch}; 