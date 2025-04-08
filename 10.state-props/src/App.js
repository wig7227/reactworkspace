import './App.css';
import Controller from './component/Controller';
import Views from './component/View';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function onClickBtn(value){
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <section>
        <Views count={count}/>
      </section>
      <section>
        <Controller onClickBtn={onClickBtn}/>
      </section>
    </div>
  );
}

export default App;
