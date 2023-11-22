import React from "react";
import style from "./index.module.scss";

const Headerx = () => {
  return (
    <React.Fragment>
      <div className="container mt-5" id={style.box}>
        <h2>
          Stay at home <span className={style.span}>2D</span>
        </h2>
      </div>
    </React.Fragment>
  );
};

export default Headerx;
