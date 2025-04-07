import { useState } from "react";

const LightOnOff = () => {
    // light = true, false
    const [light, setLight] = useState(false);

    const [blight, bsetLight] = useState(false);
    
    return (
        <>
            <button onClick={() => {setLight(!light)}}>
                {light == true ? "끄기" : "켜기"}
            </button>

            <br/><hr/><br/>
            { blight ? <h1 style={{color:'hotpink'}}>전구ON</h1> : <h1 style={{color:'gray'}}>전구OFF</h1>}
            <button onClick={() => {bsetLight(!blight)}}>
                {blight == true ? "전구키기" : "전구끄기"}
            </button>
            
        </>
    )
}
export default LightOnOff;
