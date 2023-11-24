import React, { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";
import style from "./index.module.scss";
const { Meta } = Card;

function Cardsx() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios("https://655ed20f879575426b43fd2e.mockapi.io/api/user").then(
      (response) => {
        setDatas(response.data);
      }
    );
  }, []);

  return (
    <React.Fragment>
      <div className={style.headerBox}>
        {datas &&
          datas.map((data,idx) => {
            return (
              <div className={style.cardBox}>
                <Card
                  key={idx}
                  hoverable
                  style={{
                    width: 240,
                  }}
                >
                  <Meta title={data.userName} description={data.password} />
                </Card>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
}

export default Cardsx;
