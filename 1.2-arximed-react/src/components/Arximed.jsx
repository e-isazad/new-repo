import React, { useState } from "react";

function Arximed() {
    
  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
 

  function handleInputOne(e) {
    setNum1(e.target.value)
  }

  
  function handleInputTwo(e) {
    setNum2(e.target.value)
  }


  function handleTopla() {
    let sum=Number(num1+num2)
    console.log(sum)

  }

  function handleVur() {
    console.log(num1*num2)


  }
  function handleCix() {
    console.log(num1-num2)

  }
  function handleBol() {
    console.log(Math.round(num1/num2))

  }

  return (
    <React.Fragment>
      <div>
        <span>1-ci eded</span> <input value={num1} onChange={(e) => handleInputOne(e)} />
      </div>
      <div>
        <span>2-ci eded</span> <input value={num2} onChange={(e) => handleInputTwo(e)} />
      </div>
      <button onClick={handleTopla}>Topla</button>
      <button onClick={handleCix}>cix</button>
      <button onClick={handleVur}>vur</button>
      <button onClick={handleBol}>bol</button>
      <div>
        <input  />
      </div>
    </React.Fragment>
  );
}

export default Arximed;
