import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function UseReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="mb-4 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">useReducer Hook</h2>
      <p className="mt-2">Count: {state.count}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => dispatch({ type: 'increment' })}
      >
        Increment
      </button>
      <button
        className="mt-2 ml-2 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        Decrement
      </button>
    </div>
  );
}

export default UseReducerComponent;