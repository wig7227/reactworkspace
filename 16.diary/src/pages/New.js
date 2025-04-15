import Button from "../components/Button"
import Header from "../components/Header"
import Editor from "../components/Editor"
import { useNavigate } from "react-router-dom"
import { DiaryDispathContext } from "../App"
import { useContext } from "react"


const New = (() => {
    const nav = useNavigate();
    const{ onCreate } = useContext(DiaryDispathContext)

    const onSubmit = (input) => {
        onCreate(
            input.createDate.getTime(),
            input.emotionId,
            input.content
        )
        nav("/", { replace: true })
    }
    
    return (
        <div>
            <Header 
                title={"새 일기 쓰기"}
                leftChild = { <Button text={"뒤로"} onClick={() => nav(-1)}/>}
                
            />
            <Editor onSubmit={onSubmit}/>
        </div>
    )
})
export default New