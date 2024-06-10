import React, { useState, useMemo } from 'react';

function UseMemoComponent() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return a + b;
  }, [a, b]);

  return (
    <div className="mb-4 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">useMemo Hook</h2>
      <div className="mt-2">
        <input
          type="number"
          className="p-2 border rounded"
          value={a}
          onChange={(e) => setA(Number(e.target.value))}
        />
        <input
          type="number"
          className="ml-2 p-2 border rounded"
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
        />
      </div>
      <p className="mt-2">Sum: {sum}</p>
    </div>
  );
}

export default UseMemoComponent;