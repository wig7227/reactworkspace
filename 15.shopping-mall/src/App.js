import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Navbar, Nav, Container, Button } from 'react-bootstrap';
import './App.css';
import pList from './data/ProductList';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import  axios from 'axios';



function App() {
  const [clothes, setClothes] = useState(pList);

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

            <Button variant="outline-primary" onClick={() => {
              axios.get('https://raw.githubusercontent.com/wig7227/reactworkspace/refs/heads/main/15.shopping-mall/data2.json')
                   .then((result) => {
                    console.log(result);
                    console.log(result.data);

                    setClothes([...clothes, ...result.data]);
                    
                   })
                   .catch(() => {
                    console.log('데이터 가져오기 실패');
                   })
            }}>데이터 가져오기</Button>

            <Button variant="outline-primary" onClick={() => {
              axios.get('https://raw.githubusercontent.com/professorjiwon/data/refs/heads/main/data3.json')
                   .then((result) => {
                    console.log(result);
                    console.log(result.data);

                    setClothes([...clothes, ...result.data]);
                    
                   })
                   .catch(() => {
                    console.log('데이터 가져오기 실패');
                   })
            }}>데이터 가져오기2</Button>
          </>
        }/>

       <Route path='/detail/:pindex' element={<Detail clothes={clothes}/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/about' element={<div>about 페이지입니다</div>} />
        <Route path='*' element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

function PListCol(props) {
  return (
    <Col md={4}>
      <img src = {`${process.env.PUBLIC_URL}/img/top${props.clothes.id}.png`} width="75%"/>
      <h4>{props.clothes.title}</h4>
      <p>{props.clothes.price}</p>
    </Col>
   
  )
}
export default App;