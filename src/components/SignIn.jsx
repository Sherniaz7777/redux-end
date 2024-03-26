import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";

import styles from "./SignUp.module.css";
import {  NavLink } from "react-router-dom";
import { loginUser } from "../store/slice/loginSlice";
import Home from "../pages/Home";
import { useTranslation } from "react-i18next";
import "../i18n/i18n"
import i18next from "../i18n/i18n";


const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const SignIn = () => {
  const dispatch = useDispatch();
  
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(loginUser(values));
    setTimeout(()=>{
     
      window.location.href = '/';
    },500)

    
  };
  const { t, i18n } = useTranslation();

  const clickDiv = (e) => {
    let authDiv = e.target.closest("#test");
  
    if (!authDiv) {

      return window.location.href = '/';
    }
  
    if (authDiv.classList.value === styles.auth) {
   
    }
  };
  

  return (
    <div>
   <Home/>

    <div className={styles.overlay}  onClick={clickDiv}>
        
      <div className={styles.auth} id="test">
        <NavLink to={'/'}>

        <button style={{ width:20, height:20, background:"none", border:"none", fontSize:24, color:"white"}}>x</button>
        </NavLink>
        <div >

        
        <h1  style={{textAlign:"center", color:"#FFFFFF"}}>{t("Sign In")}</h1>
        
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            // span: 16,
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
          <p style={{textAlign:"center", marginTop:20}}>

          <Form.Item
            
            name="email"
            
            rules={[
                {
                    required: true,
                    message:   `${t("Please input your email!")}`,
                },
            ]}
            >
            <Input placeholder='Email' id="input" type="email"/>
          </Form.Item>
              </p>


              <p style={{textAlign:"center"}}>

          <Form.Item
            
            name="password"
            
            rules={[
                {
                    required: true,
                    message:`${t("Please input your password!")}` ,
                },
            ]}
            >
            <Input.Password placeholder={t('Password')} id="input" type="password"/>
          </Form.Item>
          </p>
           

          <div
                  style={{ display: "flex", justifyContent: "space-between", marginBottom:10 }}
                >
                  <h3 style={{ color: "white", fontSize: 14 }}>
                    {t("Don't have an account yet?")}
                   
                  </h3>
                  <NavLink to={"/signUp"}>
                    <h3
                      style={{ color: "blue", fontSize: 14 }}
                      
                    >
                      {t("Register")}
                      
                    </h3>
                  </NavLink>
                </div>
          <Form.Item
            wrapperCol={{
            //   offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              {t("Submit")}
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
    </div>
    </div>
  );
};
export default SignIn;
