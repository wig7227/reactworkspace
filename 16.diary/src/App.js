import { createContext, useReducer, useRef } from 'react';
import './App.css';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';
import { Routes, Route, Link } from 'react-router-dom';

const mockData = [
  {
    id : 1,
    createDate : new Date("2025-04-15").getTime(),
    emotionId : 1,
    content : "1번 일기 내용 쓰기"
  },
  {
    id : 2,
    createDate : new Date("2025-04-03").getTime(),
    emotionId : 2,
    content : "2번 일기 내용 쓰기"
  },
  {
    id : 3,
    createDate : new Date("2025-03-03").getTime(),
    emotionId : 3,
    content : "3번 일기 내용 쓰기"
  },
  {
    id : 4,
    createDate : new Date("2025-02-17").getTime(),
    emotionId : 4,
    content : "4번 일기 내용 쓰기"
  }
]

function reducer(state, action) {
  switch(action.type) {
    case "CREATE" :
      return [action.data, ...state];
    case "UPDATE" :
      return state.map((item) =>
        String(item.id) == String(action.data.id) ? action.data : item
      )
    case "DELETE" :
      return state.filter((item) =>
        String(item.id) != String(action.id)
      )
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispathContext = createContext();  // dispath(액션처리용)

function App() {
  /*
    useReducer() : 상태관리, 상태 업데이트 hook
  */
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(5);

  // 일기 추가
  const onCreate = (createDate, emotionId, content) => {
     dispatch({
      type: "CREATE",
      data : {
        id : idRef.current++,
        createDate,
        emotionId,
        content
      }
    })   
  }

  // 일기 update
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type : "UPDATE",
      data : {
        id,
        createDate,
        emotionId,
        content
      }
    })
  }

  // 일기 delete
  const onDelete = id => {
    dispatch({
      type: "DELETE",
      id
    })
  }

  /*
    * createContext() : 전역상태를 공유하여 관리 
  */





  return (
    <div className="App">
      <DiaryStateContext.Provider value={data}>
        <DiaryDispathContext.Provider value={{onCreate, onUpdate, onDelete}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/*" element={<div>잘못된 페이지 입니다</div>} />
        </Routes>
        </DiaryDispathContext.Provider>
      </DiaryStateContext.Provider>
    </div>
  );
}

export default App;
