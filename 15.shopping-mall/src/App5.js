import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Navbar, Nav, Container, Button } from 'react-bootstrap';
import './App.css';
import pList from './data/ProductList';
import { createContext, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import  axios from 'axios';

/*
  * SPA의 단점
  - 컴포넌트간의 STATE공유 어려움

  * 공유저장 공간 사용
    1. Context Api : 기본 탑재되어 있음
        잘 안쓰는 이유 : 성능 이슈(하나만 변해도 하위의 모든것들을 재랜더링)
                       재사용이 어렵다
    2. Redux : 외부 라이브러리
       주로 사용
*/
 
export let Context1 = createContext();

function App() {
  const [clothes, setClothes] = useState(pList);
  const[count, setCount] = useState(2);

  let navigate = useNavigate();

  // 재고 변경
  let [stock, setStock] = useState([5, 10, 7]);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }} >Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>about</Nav.Link>
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
              axios.get(`https://raw.githubusercontent.com/wig7227/reactworkspace/refs/heads/main/15.shopping-mall/data${count}.json`)
                   .then((result) => {
                    console.log(result);
                    console.log(result.data);
                    setClothes([...clothes, ...result.data]);
                    setCount(count+1);
                   })
                   .catch(() => {
                    console.log('데이터 가져오기 실패');
                   })
            }}>데이터 가져오기</Button>
          </>
        }/>

       <Route path='/detail/:pindex' element={
         <Context1.Provider value={{stock, clothes}}>
           <Detail clothes={clothes}/>
         </Context1.Provider>
        } />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/about' element={<div>about 페이지입니다</div>} />
        <Route path='*' element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

function PListCol({clothes}) {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/detail/${clothes.id-1}`)
  }
  return (
    <Col md={4} onClick={goDetail}>
      <img src = {`${process.env.PUBLIC_URL}/img/top${clothes.id}.png`} width="65%"/>
      <h4>{clothes.title}</h4>
      <p>{clothes.price}</p>
    </Col>
   
  )
}

export default App;