import React, { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";
import style from "./index.module.scss";
const { Meta } = Card;

function Cardsx() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios(`https://655ed20f879575426b43fd2e.mockapi.io/api/employes`).then(
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
                  cover={<img alt="example" src={data.img} />}
                >
                  <Meta title={data.name} description={data.Marka} />
                </Card>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
}

export default Cardsx;
