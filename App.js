
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0); // usestate always two value return do.(array ) and your variable namre
  const Increment = () => {
    if (count >= 15) {
      setCount(count);
    } else {
      setCount(count + 1);
    }
  };
  const Decrement = () => {
    if (count <= 0) {
      setCount(count);

    } else {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(count = 0);
  };


  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );

}

export default App;