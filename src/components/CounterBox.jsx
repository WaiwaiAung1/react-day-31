import React from "react";

export default function CounterBox({title,count,onInc,onDec,onReset}){
    return(
        <div style={{
            border:"2px solid #ccc",
            padding:"20px",
            borderRadius:"10px",
            width:"280px",
            marginBottom:"20px"
        }}> 
        <h2>{title}</h2>
        <h1>{count}</h1>
        <button onClick={onInc} style={{marginRight:10}}> + Increase</button>
        <button onClick={onDec} style={{marginRight:10}}> - Decrease</button>
        <button onClick={onReset}> Reset</button>
        </div>
    )
}