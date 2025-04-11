import { useEffect, useState } from "react";
import { Button} from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail(props) {
    let {pindex} = useParams();
    console.log(pindex);
    let id = props.clothes[pindex].id;

    let findId = props.clothes.find(function(v) {
        return v.id == id;
    })

    //let[alert, setAlert]= useState(true);

    // useEffect(() => {
    //     setTimeout(() => {setAlert(false)}, 3000)
    //         clearTimeout(timer);   
    // })

    //숫자의 상태를 저장하는 hook 숫자가 들어오면 아무것도 안하고, 문자가 들어오면 alert창 띄우기 
    // Not a Number = isNaN => 숫자면 false
    
    let[num, setNum] = useState('');
    useEffect(() => {
        if(isNaN(num) == true) {
            alert('숫자만 입럭하세요');
        }
    },[num])





    return (
        
        <div className="detail">
            <input onChange={(e) => {setNum(e.target.value)}}/>
            {
                alert ? <div>3초이내에 구매시 30%할인</div> : null
            }
            <div className="detail_img">
                <img src = {`${process.env.PUBLIC_URL}/img/top${findId.id}.png`} width="60%"/>
            </div>
            <div className="detail_text">
                <h4>{findId.title}</h4>
                <p>{findId.content}</p>
                <p>{findId.price}원</p>
                <Button variant="outline-primary">주문하기</Button>
            </div>          
        </div>
        
    )
}
export default Detail;