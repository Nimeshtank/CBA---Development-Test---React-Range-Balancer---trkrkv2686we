
import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
   const [reqSum, setReqSum] = useState(50);
  // const [Sum, setSum] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(50);

  return (
    <div className="App">
      <div id="max-sum-holder">
        <label>
          Input max sum:-
          <input
            type="number"
            value={reqSum}
            onChange={(e) => {
              setReqSum(e.target.value);
            }}
          />
        </label>
      </div>
      <div id="range-a-holder">
        <input type="range" max='0'  value={a} 
        onChange={(e)=>{setA(e.target.value);
         
        }}/>
        <div id="range-a-value">{a}</div>
      </div>


      <div id="range-b-holder">
        <input type="range" max='50' value={b}
          onChange={(e)=>{setB(e.target.value);

           }}/>
        <div id="range-b-value">{b}</div>
      </div>

      <div id="sum">{a+b}</div>
    </div>
  
  )
}


export default App;
