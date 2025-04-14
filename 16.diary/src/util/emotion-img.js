import emotion1 from '../resources/img/img1.png';
import emotion2 from '../resources/img/img2.png';
import emotion3 from '../resources/img/img3.png';
import emotion4 from '../resources/img/img4.png';
import emotion5 from '../resources/img/img5.png';
import emotion6 from '../resources/img/img6.png';

export function getEmotionImg(emotionId){
    switch(emotionId) {
        case 1:
            return emotion1;
        case 2:
            return emotion2;  
        case 3:
            return emotion3;
        case 4:
            return emotion4;
        case 5:
            return emotion5;
        case 6:
            return emotion6;
        default :
            return null;              
    }
}
