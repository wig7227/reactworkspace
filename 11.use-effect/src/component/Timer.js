import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    // 타이머 설정
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    
    // 컴포넌트가 언마운트되거나 의존성이 변경될 때 타이머 정리
    return () => clearInterval(interval);
  }, []); // 빈 배열은 컴포넌트 마운트 시 한 번만 실행됨을 의미
  
  return <div>경과 시간: {seconds}초</div>;

}
export default Timer;