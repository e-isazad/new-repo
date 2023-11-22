import React from "react";
import { Card, Space } from "antd";
import { Input } from "antd";
import style from "./index.module.scss";

const Hava = () => (
  <div>
    <Input placeholder="weather forecast" />

    <div className={style.hava}>
      <Space direction="vertical" size={16}>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{
            width: 300,
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    </div>
  </div>
);

export default Hava;

