import React, { useState } from 'react';

function UseStateComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="mb-4 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">useState Hook</h2>
      <p className="mt-2">Count: {count}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default UseStateComponent;