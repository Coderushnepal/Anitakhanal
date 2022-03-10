import React, { useEffect, useState, useMemo } from "react";

export const Calculator = () => {
  const [dollar, setDollar] = useState(10);
  const [pound, setPound] = useState(10);

//   useEffect(() =>{
//       setPound(0.76 * dollar);

//   },[dollar]);

//   useEffect(() =>{
//       setDollar(pound / 0.76);
//   },[pound]);

const double = useMemo(() => {
    return doubleTheDollar(dollar);
  }, [dollar]);

  
  return (
    <div>
      <h1> Calculator </h1>
      Enter $ :
      <input
        type="number"
        value={dollar}
        onChange={(e) => setDollar(e.target.value)}
      />
      <div>
          Enter Pound :
      <input 
         type = "number"
         value = {pound}
         onChange = {(e) => setPound(e.target.value)}
         />

      </div>
      <div> Rupess = {dollar * 122}</div>
      <div> dollar = {pound * 132}</div>
      <div> double = {double}</div>
    </div>
  );
};
function doubleTheDollar(dollar) {
    for (let i = 0; i < 99999; i++) {
      for (let j = 0; j < 9999; j++) {}
    }
  
    return 2 * dollar;
  }
  
export default Calculator;
