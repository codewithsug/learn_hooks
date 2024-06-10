import React, { useRef } from 'react';

function UseRefComponent() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="mb-4 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">useRef Hook</h2>
      <input ref={inputRef} type="text" className="mt-2 p-2 border rounded" />
      <button
        className="mt-2 ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={focusInput}
      >
        Focus Input
      </button>
    </div>
  );
}

export default UseRefComponent;