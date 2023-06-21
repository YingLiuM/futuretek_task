import { useState } from "react";
function HookExample(){

    const [count,setCount] = useState(0);

    return(
        <>
            <p>You clicked {count} times</p>
            <button onClick={()=> setCount(count+1)} >Click</button>
        
        </>
    )

}

export default HookExample;