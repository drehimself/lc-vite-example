import React, { useState, useEffect } from 'react';

export default function ExampleReact({ name }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('React Use Effect Hook.')
  }, [])


  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <div>Change Example React Component</div>
      <div>Hello, {name}</div>
      <div>
        Count: {count}
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}
