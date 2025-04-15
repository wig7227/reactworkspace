import { useContext, useState } from "react"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"
import Header from "../components/Header"
import {DiaryStateContext} from '../App'
/*
new Date(2025,4,1,0,0,0)
new Date(2025,5,0,)
*/
const getMonthlyDate = (pivotDate, data) => {
    const beginTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1,
        0,
        0,
        0

    ).getTime();

    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1,
        0,
        23,
        59,
        59
    ).getTime();

    return data.filter((item) => beginTime <= item.createDate && endTime >= item.createDate)
}

const Home = (() => {
    const [pivotDate, setPivotDate] = useState(new Date());

    const data = useContext (DiaryStateContext)
    const monthlyData = getMonthlyDate(pivotDate, data)


    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    }
    return (
        <div>
            <Header 
                title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
                leftChild = { <Button text={"<"} onClick={onDecreaseMonth} /> }
                rightChild = { <Button text={">"} onClick={onIncreaseMonth} /> }
            />
            <DiaryList data={monthlyData} />
        </div>
    )
})
export default Home