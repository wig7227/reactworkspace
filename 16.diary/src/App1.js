import './App.css';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';
import { Routes, Route, Link } from 'react-router-dom';
import emotion1 from './resources/img/img1.png'
import { getEmotionImg } from './util/emotion-img'
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div>
        <img src={getEmotionImg(1)} />
        <img src={getEmotionImg(2)} />
        <img src={getEmotionImg(3)} />
        <img src={getEmotionImg(4)} />
        <img src={getEmotionImg(5)} />
        <img src={getEmotionImg(6)} />
      </div>
      <Button
        text={"일반버튼"}
        onClick={() => console.log("일반버튼 클릭")}
      />
      <Button
        text={"빨간버튼"}
        type={"red"}
        onClick={() => console.log("빨간버튼 클릭")}
      />
      <Button
        text={"초록버튼"}
        type={"green"}
        onClick={() => console.log("초록버튼 클릭")}
      />
      <div>
        <Link to={"/home"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/detail"}>Detail</Link>
        <Link to={"/edit"}>Edit</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/*" element={<div>잘못된 페이지 입니다</div>} />
      </Routes>
    </div>
  );
}

export default App;
