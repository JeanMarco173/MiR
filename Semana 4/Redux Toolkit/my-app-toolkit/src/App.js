import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { decrement, increment, reset, toggle } from './features/counterSlice';

function App() {

  console.log();

  const { value, isVisible } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const [modifier,setModifier] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(modifier){
      dispatch(increment(parseFloat(modifier)))
      setModifier('')
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Redux Counter Toolkit</h1>
        { isVisible ? <p style={{ textAlign: 'center' }}>{value}</p> : null }
      </div>
      <div>
        <button onClick={() => dispatch(increment(Number(1)))} className="Button">Increment +1</button>
        <button onClick={() => dispatch(decrement(Number(1)))} className="Button">Decrement -1</button>
      </div>
      <div>
        <button onClick={() => dispatch(toggle())} className="Button">Toggle Counter</button>
        <button onClick={() => dispatch(reset())} className="Button">Reset Counter</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Valor para incrementar o decrementar</label><br/>
        <input value={modifier} onChange={ e => setModifier(e.target.value) }></input>
      </form>
    </div>
  );
}

export default App;
