import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import top1 from './img/top1.png'
import pList from './data/ProductList';
import { useState } from 'react';

const clothes =  [
  {
    id: 1,
    title : 'black-top',
    content : 'Made in the Stree',
    price : 25000
  },
  {
    id: 2,
    title : 'shirts',
    content : 'Made in the Korea',
    price : 55000
  },
  {
    id: 3,
    title : 'white-top',
    content : 'Made in the Stree',
    price : 35000
  }
]
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

      <div className='main-bg'/>
      {/* <img src={mainBg}/> */}

      {/* public/img 폴더에 저장했을 떄 import필요 없음 */}
      {/* <img src="/img/main.jpg" /> */}

      {/* 배포할 때 기존 url하위에 폴더를 가져와야 되므로 
      기존 url을 얻어와서 넣어 준다 */}
      {/* <img src={process.env.PUBLIC_URL + '/img/main.jpg'} />; */}

      <Container>
        <Row>
          <Col>
             {/* src 하위에 넣었을 때 import하여 넣는다*/}
            <img src= {top1} width="80%"/>
            <h4>{clothes[0].title}</h4>
            <p>{clothes[0].price}</p>
          </Col>
          <Col>
            {/* public/img 폴더에 그림이 있을 때 import 필요없음 */}
            <img src= '/img/top2.png' width="80%"/>
            <h4>{clothes[1].title}</h4>
            <p>{clothes[1].price}</p>
          </Col>
          <Col>
            {/* public/img 폴더에 그림이 있고 배포할 때 url을 얻어와서 앞에 넣어준다 */}
            {/* 배포시 tjoeun.com/abc/~~~  하위 경로일때는 그림을 못찾음. */}
            {/* <img src = {process.env.PUBLIC_URL + '/img/clothes2.png'} /> */}
            <img src = {`${process.env.PUBLIC_URL}/img/top3.png`} width="75%"/>
            <h4>{clothes[2].title}</h4>
            <p>{clothes[2].price}</p>
          </Col>
        </Row>
    </Container>
    </div>

  );
}

export default App;
