import { useEffect, useState, useLayoutEffect } from "react";

const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;

    if(isRunning) {
      intervalId = window.setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
    
    return () => {
      window.clearInterval(intervalId)
    }
  }, [isRunning])
  
  useEffect(() => {
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key', time);
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem('time-key'));
    if(!isNaN(_time)) {
      setTime(_time);
    }
  }, [])

  const toggle = () => {
    setIsRunning(prev => !prev);
  }

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  }
  // オブジェクトを返すよ！
  // 『toggle: toggle』とは、
  // toggleのプロップスにtoggle関数をセットするよ。
  return {
  //   time: time,
  //   isRunning: isRunning,
  //   toggle: toggle, 
  //   reset: reset
    time,
    isRunning,
    toggle,
    reset,
  }
};

export default useTimer;