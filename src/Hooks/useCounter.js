import { useState,useCallback } from "react";
export default function useCounter(initial=0){

    const [count,setCount]= useState(initial);

const increment = useCallback(()=> {
    setCount((prev)=> prev + 1)},[]
);

const decrement = useCallback (()=> {
setCount((prev)=> prev -1)
},[]);

const reset = useCallback (()=> {
setCount(initial)},[initial])

return {count,increment,decrement,reset};
}