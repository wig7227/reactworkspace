import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
//import top1 from './img/top1.png'
import pList from './data/ProductList';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';


function App() {
  const [clothes, setClothes] = useState(pList);
  /*
  * useNavigate() : 페이지의 이동을 도와주는 함수
  */

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }} >Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>about</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>

            {/* 
            <Nav.Link onClick={() => { navigate(1) }}>Cart</Nav.Link>  1page앞으로
            <Nav.Link onClick={() => { navigate(-1) }}>Cart</Nav.Link> 1page뒤로
             */}
          </Nav>
        </Container>
      </Navbar>

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

       <Route path='/detail/:pindex' element={<Detail clothes={clothes}/>} />
       {/*
        <Route path='/detail/member/:pid' element={<Detail clothes={clothes}/>} />
                         member는 문자

        <Route path='/detail/:pid/:name' element={<Detail clothes={clothes}/>} />
         데이터를 여러개 보낼 때 /detail/1/홍길동
        */}

        <Route path='/cart' element={<Cart/>} />
        <Route path='/about' element={<div>about 페이지입니다</div>} />
        <Route path='*' element={<div>없는 페이지 입니다.</div>} />
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