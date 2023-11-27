import { Button, Checkbox, Form, Input } from "antd";
import style from "./index.module.scss";
import React, { useState } from "react";
import axios from "axios";
import Panel from "../Panel";
import Admin from "../Admin";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Loginn() {
  const [showCard, setShowCard] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showAdmin, setShowAdmin] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState(false);
  function handleSubmit(e) {
    axios
      .get("https://655ed20f879575426b43fd2e.mockapi.io/api/user")
      .then((respons) => {
        let datas = respons.data;
        datas.map((data) => {
          setIsAdmin(data.isAdmin);
          if (data.userName == value1 && data.password == value2) {
            alert("xos geldiniz");
            setShowCard(true);
            setShowLogin(false);
          }
        });
      });
  }

  return (
    <React.Fragment>
      {showLogin && (
        <div>
          <h1 className={style.reng}>LOGIN</h1>
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
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setValue1(e.target.value);
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                    min: 7,
                  },
                ]}
              >
                <Input.Password
                  onChange={(e) => {
                    setValue2(e.target.value);
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
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}

      {showCard ? <Panel /> : null}
      {showAdmin ? <Admin /> : null}
    </React.Fragment>
  );
}
export default Loginn;
