import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Footer = ({onClickBtn}) => {
    return (
        <div>
            <Button variant="outline-primary" onClick={() => {onClickBtn(-1)}}>-1</Button>&emsp;
            <Button variant="outline-secondary" onClick={() => {onClickBtn(-10)}}>-10</Button>&emsp;
            <Button variant="outline-success" onClick={() => {onClickBtn(-100)}}>-100</Button>&emsp;
            <Button variant="outline-warning" onClick={() => {onClickBtn(100)}}>100</Button>&emsp;
            <Button variant="outline-danger" onClick={() => {onClickBtn(10)}}>10</Button>&emsp;
            <Button variant="outline-info" onClick={() => {onClickBtn(1)}}>1</Button>&emsp;
        </div>
    )
}

export default Footer;