import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function See(){
var [a,seta]=useState("")

    var i=useParams()
        console.log(i)

        useEffect(()=>{
            axios.get("https://fakestoreapi.com/products/"+i.id).then((val)=>{
                console.log(val.data)
                seta(val.data)
            })
        },[])

    
    return(
        <>
        <h1>see{i.id}</h1>
        {Object.keys(a).length>0?(
            <div>
            <h1>{a.id}</h1>
            <h1>{a.title}</h1>
            <h1><img src={a.image} alt=""  height={100}/></h1>
        </div>
        ):<p>enter the values</p>
        }
    
    </>
        
    )
}
export default See;