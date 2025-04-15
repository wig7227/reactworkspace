import { useNavigate } from "react-router-dom";
import Button from "../components/Button"
import Header from "../components/Header"
import View from "../components/View"

const Detail = (() => {
    const nav = useNavigate();
    return (
        <div>
            <Header 
                title={"일기 상세보기"}
                leftChild = { <Button text={"뒤로"} onClick={() => nav(-1)}/>}
            />
            <View />
        </div> 
    )
})
export default Detail