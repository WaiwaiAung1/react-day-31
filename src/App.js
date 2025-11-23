import React from "react";
import CounterBox from "./components/CounterBox";
import useCounter from "./Hooks/useCounter";
export default function App() {
  const [a, setA] = React.useState(10);
  const [b, setB] = React.useState(100);


  return (
    <div>
      <h1> Developer WAI-UI ready</h1>
      <CounterBox
      title="CounterA"
      count={a}
      onInc= {()=> setA(a+1)}
      onDec= {() => setA(a-1)}
      onReset= {() => setA(10)}
      />

      <CounterBox 
      title="CounterB"
      count={b}
      onInc= {()=> setB(b+1)}
      onDec= {() => setB(b-1)}
      onReset= {() => setB(100)}
      />
    </div>
  )
}