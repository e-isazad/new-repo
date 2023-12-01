import React from "react";
import { Formx } from "../Formx";
import style from "./index.module.scss";

const Divler = () => {
  return (
    <React.Fragment>
      <div className={style.container}>
        <div className={style.leftBox}>
        <img src="https://upload.wikimedia.org/wikipedia/tr/8/83/Memati_Kurtlar_vadisi_pusu.jpg"/>
        
        </div>
        <div className={style.rightBox}>
        <Formx/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Divler;
