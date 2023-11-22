import React from "react";
import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import  { useState } from 'react';
const NavBarx = () => {
    function handleClick(e) {
        style.add
    }
    const [valuee, setvaluee] = useState(0);
  return (
    <React.Fragment>
      <div className="container  " id={style.tabBox}>
        <ul>
          <li id={style.display }
            onClick={(e) => {handleClick(e) }}
          >
            <span>1</span> Session
          </li>
          <li>
            <span>2</span> Places
          </li>
          <li>
            <span>3</span> Payment
          </li>
        </ul>
        <div className={style.icons}>
          <div className={style.icon1}>
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <p>Adults</p>
            <p>7.00 AZN</p>
            <small>
              Maxium 10 <br /> tickets
            </small>
            <div className={style.selectt}>
              <select  onChange={(e)=>{
                setvaluee(e.target.value)
                console.log(valuee)
              }}  >
              
                <option  value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                
              </select>
            </div>
          </div>
        </div>
      </div>
      <section className="container " id={style.footer}>
      <h4 className="mt-5">November 22, 09:00,Hall:3,Metro park</h4>
      <div className="container mt-5" id={style.footerBox}>
      <span> {valuee*7}</span> 
      <p>AZN</p>
      </div>
      <div className={style.next}>Forward <FontAwesomeIcon icon={faArrowRight} /></div>
      </section>
    </React.Fragment>
  );
};

export default NavBarx;
