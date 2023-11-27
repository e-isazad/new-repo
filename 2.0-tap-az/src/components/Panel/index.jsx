import { Button, Form, Input } from "antd";
import style from "./index.module.scss";
import React, { useState } from "react";
import axios from "axios";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function Panel() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("");
  const [value9, setValue9] = useState("");
  function handleSubmit(e) {
    axios
      .post("https://655ed20f879575426b43fd2e.mockapi.io/api/employes", {
        userName:value9,
        name: value1,
        Marka: value2,
        Model: value3,
        Il: value4,
        Muherrik: value5,
        SuretlerQutusu: value6,
        Yanacaqnovu: value8,
        Price: value7,
      })
      .then((respons) => {});

    setValue1("");
    setValue2("");
  }

  return (
    <React.Fragment>
      <h1 style={{ color: "darkorange" }}>CARS</h1>
      <div className={style.box}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="UserName"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your userame!",
              },
            ]}
          >
            <Input
              min={5}
              max={99}
              onChange={(e) => {
                setValue9(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="Carname"
            name="Carname"
            rules={[
              {
                required: true,
                message: "Please input your carname!",
              },
            ]}
          >
            <Input
              min={5}
              max={99}
              onChange={(e) => {
                setValue1(e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            label="Marka"
            name="marka"
            rules={[
              {
                required: true,
                message: "Please input your Car Marka!",
              },
            ]}
          >
            <Input
              min={5}
              max={99}
              onChange={(e) => {
                setValue2(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="Model"
            name="model"
            rules={[
              {
                required: true,
                message: "Please input your car model!",
              },
            ]}
          >
            <Input
              min={5}
              max={99}
              onChange={(e) => {
                setValue3(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="Il"
            name="il"
            rules={[
              {
                required: true,
                message: "Please input your car year!",
              },
            ]}
          >
            <Input
              min={5}
              max={99}
              onChange={(e) => {
                setValue4(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="Muherrik"
            name="muherrik"
            rules={[
              {
                required: true,
                message: "Please input your car muherrik!",
              },
            ]}
          >
            <Input
              min={5}
              max={99}
              onChange={(e) => {
                setValue5(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="Suretler-qutusu"
            name="suret"
            rules={[
              {
                required: true,
                message: "Please input your car speed!",
              },
            ]}
          >
            <Input
              min={5}
              max={99}
              onChange={(e) => {
                setValue6(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input your car price!",
              },
            ]}
          >
            <Input
              min={5}
              max={99}
              onChange={(e) => {
                setValue7(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="Yanacaq-novu"
            name="yanacaq"
            rules={[
              {
                required: true,
                message: "Please input your car yanacaq!",
              },
            ]}
          >
            <Input
              min={5}
              max={99}
              onChange={(e) => {
                setValue8(e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              onClick={(e) => {
                handleSubmit(e);
              }}
              type="primary"
              htmlType="submit"
            >
              Aded
            </Button>
          </Form.Item>
        </Form>
      </div>
    </React.Fragment>
  );
}
export default Panel;
