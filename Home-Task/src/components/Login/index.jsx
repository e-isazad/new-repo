import { Button, Checkbox, Form, Input } from "antd";
import React, { useContext } from "react";
import { LoginContextt } from "../services/context";
import axios from "axios";
import Cardsx from "../Cards";
import style from './index.module.scss'

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Loginn() {
  const {showCard, setShowCard} = useContext(LoginContextt);
  const {showLogin, setShowLogin} = useContext(LoginContextt);
  const {value1, setValue1} = useContext(LoginContextt);
  const {value2, setValue2} = useContext(LoginContextt);
  function handleSubmit(e) {
    axios
      .get("https://655ed20f879575426b43fd2e.mockapi.io/api/user")
      .then((respons) => {
        let datas = respons.data;
        datas.map((data) => {
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
      <div >
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
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
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
      
      {showCard ? <Cardsx /> : null}
    </React.Fragment>
  );
}
export default Loginn;
