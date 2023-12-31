import { Button, Checkbox, Form, Input } from "antd";
import style from "./index.module.scss";
import React, { useState } from 'react';
import axios from 'axios'
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function Registerr() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  function handleSubmit(e) {
   axios.post('https://655ed20f879575426b43fd2e.mockapi.io/api/user',{
    userName:value1,
    password:value2
    
   }).then((respons)=>{
   
   })
  
  setValue1('')
  setValue2('')
  }

  return (
    <React.Fragment>
    <h1 style={{color:'red'}}>Register</h1>
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
            <Input min={5} max={99}
              onChange={(e) => {
                setValue1( e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                min:7,
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password minLength={7} maxLength={22} onChange={(e)=>{
                setValue2(e.target.value)
            }} />
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
            <Button onClick={(e)=>{
                handleSubmit(e)
                
            }} type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </React.Fragment>
  );
}
export default Registerr;
