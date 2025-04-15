import { useEffect, useState } from "react"
import './Editor.css'
import EmotionItem from "./EmotionItem"
import { useNavigate } from "react-router-dom"
import { getEmotionImg } from "../util/emotion-img"
import DiaryItem from "./DiaryItem"

const emotionList = [
    {
        emotionId : 1,
        emotionName : "방긋"
    },
    {
        emotionId : 2,
        emotionName : "슬픔"
    },
    {
        emotionId : 3,
        emotionName : "흠"
    },
    {
        emotionId : 4,
        emotionName : "버럭"
    },
    {
        emotionId : 5,
        emotionName : "불편"
    },
    {
        emotionId : 6,
        emotionName : "좋음"
    },
]

const View = ({onSubmit, initData, id, emotionId, createDate, content}) => {
    const nav = useNavigate();

    useEffect(() => {
        if(initData) {
            setInput({
                ...initData,
                createDate : new Date(initData.createDate)
            })
        }
    },[initData])

    const [input, setInput] = useState({
        createDate : new Date(),
        emotionId : 1,
        content : ""
    })

    const getStringDate = (targetDate) => {
        let year = targetDate.getFullYear();
        let month = targetDate.getMonth() + 1;
        let date = targetDate.getDate()
        if(month < 10) {
            month = `0${month}`;
        }
        if(date < 10) {
            date = `0${date}`;
        }

        return `${year}-${month}-${date}`;
    }

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name == "createDate") {
            value = new Date(value);    // String을 Date로 바꿔서 넣어줌
        }

        setInput({
            ...input, [name] : value
        })
    }

    return (
        <div>
            <section className="View">
                <h4>오늘 날짜</h4>
                <input name="createDate" 
                       type="date" 
                       value={getStringDate(input.createDate)}/>

                <div className="img_section">
                                <img src={getEmotionImg(emotionId)}/> 
                            </div>
            </section>
            <section>
                <h4>오늘의 감정</h4>
                <div className="img_section">
                <img src={getEmotionImg(emotionId)} /> 
                </div>
            </section>
            <section>
                <h4>오늘의 일기</h4>
                <textarea rows="5" cols="63" name="content"
                          value={input.content} >
                </textarea>
                          
            </section>
            {/* <Editor initData = {curDiaryItem} onSubmit={onSubmit}/> */}
        </div>
        
    )
}
export default View