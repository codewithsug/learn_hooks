import React from 'react';
import UseStateComponent from './components/UseStateComponent';
import UseEffectComponent from './components/UseEffectComponent';
import UseContextComponent, { MyContext } from './components/UseContextComponent';
import UseReducerComponent from './components/UseReducerComponent.jsx';
import UseRefComponent from './components/UseRefComponent';
import UseMemoComponent from './components/UseMemoComponent';
import UseCallbackComponent from './components/UseCallbackComponent';

function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 justify-center" >Learn Hooks</h1>
      <UseStateComponent />
      <UseEffectComponent />
      <MyContext.Provider value="Hello from Context!">
        <UseContextComponent />
      </MyContext.Provider>
      <UseReducerComponent />
      <UseRefComponent />
      <UseMemoComponent />
      <UseCallbackComponent />
    </div>
  );
}

export default App;