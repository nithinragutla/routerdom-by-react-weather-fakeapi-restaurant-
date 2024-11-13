import { useMemo,useState } from "react";

function Memo(){
var [s,sets]=useState([])


var h1=useMemo(()=>{
    return s*(s+1)/2

},[s])

var h=()=>{
var u=+prompt("enter a value")
sets(u)
}
    return(
        <>
<h1>{h1}</h1>
<button onClick={h}>click me</button>

</>
    )
}
export default Memo;