import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './common/Header';
import { useState } from 'react';
import Footer from './common/Footer';
import Modals from './common/modal';


function App() {
  const [count, setCount] = useState(0);

  function onClickBtn(value){
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Counter</h1>
        <Modals/> <br/><br/>
      <section>
        <Header count={count}/> <br/><br/>
      </section>
      <section>
        <Footer onClickBtn={onClickBtn}/>
      </section>
    </div>
  );
}
    

export default App;
