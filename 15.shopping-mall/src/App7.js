import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Navbar, Nav, Container, Button } from 'react-bootstrap';
import './App.css';
import pList from './data/ProductList';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import  axios from 'axios';

function App() {

  //[object Object]의 문자열로 들어감 쓸 수 없음
  //let obj = {addr : '강남구'}
  //let addr = JSOM.stringly(obj)

  // JSON으로 모두 문자열로 변환하여 넣는다
  let obj = {addr : '강남구'}
  let addr = JSON.stringify(obj)
  localStorage.setItem('addr', addr);

  let user = {
    name: 'kim',
    age : 25,
    hobbies : ['programing', 'gaming']
  }
  localStorage.setItem('user', JSON.stringify(user))

  let getUser = localStorage.getItem('user');
  console.log(getUser)
  console.log(getUser.name)  // 사용못함

  // 가져올 때 json -> object 형태로 전환
  let storageUser = localStorage.getItem('user');
  let u = JSON.parse(storageUser) //object로 변경
  console.log(u.name)

  // 문. 최근에 본 상품 보여주기
  useEffect(() => {
    if(!localStorage.getItem('recentProduct')){
    localStorage.setItem('recentProduct', JSON.stringify( [] ))
    }
  },[])


  const [clothes, setClothes] = useState(pList);
  const[count, setCount] = useState(2);

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

       <Route path='/detail/:pindex' element={<Detail clothes={clothes}/>} />
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