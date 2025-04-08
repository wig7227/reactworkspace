import './Button.css';
/* //1
const Button = () => {
    return (
        <>
            <button style={{color : 'red'}} className="btn">버튼</button>
            
        </>
    )
}
*/

/* //2
const Button = (props) => {
    return (
        <>
            <button style={{color : propss.btnValue.color}} className="btn">버튼</button>
            <p>{propss.btnValue.text}입니다</p>
        </>
    )
}
*/

  //3  2.번도 받을 수 있음 (객체분해할당임)
const Button = ({color, text, b}) => {
    return (
        <>
            <p>{text}입니다</p>
            <button style={{color : color}} className="btn">버튼</button>
            <p>{b}번 입니다</p>
        </>
    )
}
export default Button;