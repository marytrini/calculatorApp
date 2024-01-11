import React,{ useRef, useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value))
  }
  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value))
  }
  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value))
  }
  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value))
  }

  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  }

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  }
  return (
    <div className="App">
      <form>
        <p ref={resultRef}>{result}</p>
        <input 
        type='number'
        ref={inputRef}
        pattern='[0-9]'
        placeholder='type a number'
         />
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={times}>*</button>
        <button onClick={divide}>/</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>

      </form>
    </div>
  );
}

export default App;
