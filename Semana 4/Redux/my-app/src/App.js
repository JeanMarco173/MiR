import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
import './App.css';

function App() {

  const [ modifier, setModifier ] = useState(0)

  const dispatch = useDispatch();
  const { counter, isVisible } = useSelector((state) => state);

  const incrementHandler = () => {
    dispatch({ type: 'increment', value: 1 });
  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement', value: 1  });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };
  const resetCounterHandler = () => {
    dispatch({ type: 'reset' });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'increment', value: parseFloat(modifier) });
  }

  return (
    <div className="App">
      <div>
        <h1>Redux Counter</h1>
        { isVisible ? <p style={{ textAlign: 'center' }}>{counter}</p> : null }
      </div>
      <div>
        <button onClick={incrementHandler} className="Button">Increment +1</button>
        <button onClick={decrementHandler} className="Button">Decrement -1</button>
      </div>
      <div>
        <button onClick={toggleCounterHandler} className="Button">Toggle Counter</button>
        <button onClick={resetCounterHandler} className="Button">Reset Counter</button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Valor para incrementar o decrementar</label><br/>
        <input value={modifier} onChange={ e => setModifier(e.target.value) }></input>
      </form>
    </div>
  );
}

export default App;