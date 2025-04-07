import './App.css';

function App() {
  const isStudent = true;


  return (
    // return문 안에서는 if문을 쓸 수 없음. 삼항연산자로 사용

    // 문자로 인식
    /*
    <div className="App">
      isStudent == true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>
    </div>
    */

    // 삼항연산자로 인식
    <div className="App">
    {isStudent == true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>}
    </div>
  );
}

export default App;
