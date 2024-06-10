import React, { useState, useCallback } from 'react';

function UseCallbackComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="mb-4 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">useCallback Hook</h2>
      <p className="mt-2">Count: {count}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
}

export default UseCallbackComponent;