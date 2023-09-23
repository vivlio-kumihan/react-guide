import { useState } from 'react';
import './Example.css';

const Example = () => {
  console.log(<Example />);
  let [countA, setCountA] = useState(0);
  let [countB, setCountB] = useState(10);
  let [countC, setCountC] = useState(100);

  return (
    <>
      <label htmlFor="">Clicked Button A, {countA} times</label>
      <button type='button'
              onClick={() => {
                setCountA(countA + 1)
              }}
      >
        Button A
      </button>
      
      <label htmlFor="">Clicked Button B, {countB} times</label>
      <button type='button'
              onClick={() => {
                setCountB(countB + 1)
              }}
      >
        Button B
      </button>

      <label htmlFor="">Clicked Button C, {countC} times</label>
      <button type='button'
              onClick={() => {
                setCountC(countC + 1)
              }}
      >
        Button C
      </button>

    </>
  );
};

export default Example;
