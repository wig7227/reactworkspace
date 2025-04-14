import { useEffect, useState } from "react";
import { Button, Nav, Table} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { addItem } from "../store/Store";
import { useDispatch } from "react-redux";


function Detail(props) {
    //가져오기 //배열로 형변환 //배열에 넣기// localStorage넣기
    useEffect(() => {
        let p = localStorage.getItem('recentProduct')
        p = JSON.parse(p)

        if(!p.includes(findId.id)) {
            p.push(findId.id)
            localStorage.setItem('recentProduct', JSON.stringify(p))
        }
    },[])

    let dispatch = useDispatch()
    const nav = useNavigate()

    let {pid} = useParams();
    let findId = props.clothes.find((v) => v.id == pid)

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
            
            <div className="detail_text">
                <h4>{findId.title}</h4>
                <p>{findId.content}</p>
                <p>{findId.price}원</p>
                <Button variant="outline-primary" onClick={() => {
                    dispatch(addItem({id: findId.id , name: findId.title , count:1}))
                    nav('/cart')
                }}

                >주문하기</Button>
            </div>
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
            <RecentViewed clothes={props.clothes} />
            
        </div>
    )
}

function RecentViewed ({clothes}) {
        const [recent, setRecent] = useState([]);

        useEffect (() => {
            let viewed = JSON.parse(localStorage.getItem('recentProduct')) || []

            let products = viewed.map(id => clothes.find(c => c.id == id))

            setRecent(products);
        },[clothes])

        return (
            <div>
                <h4>👀최근 본 상품</h4>
                <Table striped bordered hover>
                    <thead> 
                        <tr>
                            <th>이름</th>
                            <th>제품설명</th>
                            <th>가격</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        recent.map((item) =>
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.content}</td>
                                <td>{item.price}원</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
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