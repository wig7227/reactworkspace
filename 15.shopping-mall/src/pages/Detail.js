import { useContext, useEffect, useState } from "react";
import { Button, Nav} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context1 } from "../App";

function Detail(props) {
   
    let {pindex} = useParams();
    
    let id = props.clothes[pindex].id;

    let findId = props.clothes.find(function(v) {
        return v.id == id;
    })

    let[alert, setAlert]= useState(true);
    let[tab, setTab]= useState(0);
    

    useEffect(() => {
        let timer = setTimeout(() => {setAlert(false)}, 3000)
            return () => {
                clearTimeout(timer);  
            }  
    },[])

    let [detailFade, setDetailFade] = useState('start');

    useEffect(() => {
            setDetailFade('end')
    },[])


    return (
        
        <div className={detailFade}>
            {
                alert ? <div>3초이내에 구매시 30%할인</div> : null
            }
            <div className={`detail_img`}>
                <img src = {`${process.env.PUBLIC_URL}/img/top${findId.id}.png`} width="60%"/>
            </div>
            <div className="detail_text">
                <h4>{findId.title}</h4>
                <p>{findId.content}</p>
                <p>{findId.price}원</p>
                <Button variant="outline-primary">주문하기</Button>
            </div>

            <Nav justify variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(0)}} eventKey="link-0">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(1)}} eventKey="link-1">정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(2)}} eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab = {tab} />         
        </div>
        
    )
}

function TabContent({tab}) {
    let [fade, setFade] = useState('');

    useEffect(() => {
        setTimeout(() => {setFade('end')}, 200);
        return () => {
            setFade('start ');
        }
    },[tab])
    return (
        <div className={fade}>
            { [<div>hi</div>, <div>hello</div>, <div>내용들</div>][tab]}
        </div>
    )
}

export default Detail;