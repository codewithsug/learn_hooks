import React, { useState, useEffect } from 'react';

function UseEffectComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="mb-4 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">useEffect Hook</h2>
      <pre className="mt-2">{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
    </div>
  );
}

export default UseEffectComponent;

