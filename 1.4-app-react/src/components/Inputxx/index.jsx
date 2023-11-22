import React from "react";
import style from "./index.module.scss";
function Inputxx() {
  function handleSubmit(e) {
    e.preventDefault()
    
  }
  return (
   
    <React.Fragment>
      <form onClick={(e)=>handleSubmit(e)}>
        <input className={style.inp} />
        <button type="submit" className={style.btn}>search</button>
      </form>
    </React.Fragment>
  );
}

export default Inputxx;
