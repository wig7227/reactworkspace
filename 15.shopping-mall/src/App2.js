import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import top1 from './img/top1.png'
import pList from './data/ProductList';
import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
/*
  * react-router-dom
    : 페이지를 교체시켜주는 api -> router-dom

  * 사용하려면
    1. 설치 : npm install react-router-dom
    2. index.js에 <BrowserRouter> 태그 넣어주기
*/


function App() {
  const [clothes, setClothes] = useState(pList);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">Home</Link> &emsp;
      <Link to="/detail">상세페이지</Link> &emsp;
      <Link to="/cart">장바구니</Link> 

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'/>     
            <Container>
              <Row>
                {
                  clothes.map((v, i) => {
                      return (
                        <PListCol clothes={v} key={i}/>
                      )
                  })
                }
              </Row>
            </Container>
          </>
        }/>
        <Route path='/detail' element={<Detail/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  );
}

function PListCol(props) {
  return (
    <>
      <Col>
        <img src = {`${process.env.PUBLIC_URL}/img/top${props.clothes.id}.png`} width="75%"/>
        <h4>{props.clothes.title}</h4>
        <p>{props.clothes.price}</p>
      </Col>
    </>
  )
}
export default App;