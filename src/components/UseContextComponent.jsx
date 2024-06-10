import React, { useContext } from 'react';

export const MyContext = React.createContext();

function UseContextComponent() {
  const value = useContext(MyContext);

  return (
    <div className="mb-4 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">useContext Hook</h2>
      <p className="mt-2">{value}</p>
    </div>
  );
}

export default UseContextComponent;