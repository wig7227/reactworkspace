import logo from './logo.svg';
/*
// 1. style을 별도의 파일로 저장하여 사용
import './App.css';

function App() {
  return (
    <>
      <h1>더조은에 오신것을 환영합니다.</h1>
      <h3>JAVA 풀스택 웹&앱 개발자 취업캠프</h3>
      <p className="class1">react style적용하기</p>
      <p id="id2">id로 스타일 적용하기</p>
    </>
  );
}
*/

// 2. style을 변수에 객체로 저장
/*
function App() {
  const style = {
    div : {
      backgroundColor : 'yellow',
      padding : '50px',
      textAlign : 'center',
      fontSize : '30px'
    },
    h1 : {color : 'red'},
    h3 : {color : 'green'},
    class1 : {color : 'pink'},
    id2 : {color : "blue"}
  }
  return (
    <div style={style.div}>
      <h1 style={style.h1}>더조은에 오신것을 환영합니다.</h1>
      <h3 style={style.h3}>JAVA 풀스택 웹&앱 개발자 취업캠프</h3>
      <p style={style.class1}>react style적용하기</p>
      <p id="id2" style={style.id2}>id로 스타일 적용하기</p>
    </div>
  );
}
*/

// 3. inline방식으로 styl주기
function App() {
  return (
    <div style={ {textAlign:'center'} }>
      <h1 style={{color:'red'}}>더조은에 오신것을 환영합니다.</h1>
      <h3 style={{color:'blue', backgroundColor:'yellow'}}>JAVA 풀스택 웹&앱 개발자 취업캠프</h3>
      <p>react style적용하기</p>
      <p>id로 스타일 적용하기</p>
    </div>
  );
}

export default App;
