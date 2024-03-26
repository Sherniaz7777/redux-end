import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import styles from "./SignUp.module.css";
import { NavLink } from "react-router-dom";
import { postUser } from "../store/slice/signUpSlice";
import Home from "../pages/Home";
import { useTranslation } from "react-i18next";
import "../i18n/i18n"
import i18next from "../i18n/i18n";

const SignUp = () => {
  const [signup, setSignup] = useState(false);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(postUser(values));
    setSignup(true);
  };
  const { t, i18n } = useTranslation();

  const clickDiv = (e) => {
    let authDiv = e.target.closest("#test");

    if (!authDiv) {
      return (window.location.href = "/");
    }

    if (authDiv.classList.value === styles.auth) {
    }
  };
  const change = () => {

  };

  return (
    <div>
      <Home />

      <div className={styles.overlay} id="Sign-Up" onClick={clickDiv}>
        <div className={styles.auth} id="test">
          <NavLink to={'/'}>

          <button
            style={{
            //   marginTop: -35,
            //   marginLeft: -10,
              width: 20,
              height: 20,
              background: "none",
              border: "none",
              fontSize: 24,
              color: "white",
            }}
            
          >
            x
          </button>
          </NavLink>
          <div >
            <h1 style={{ textAlign: "center", color: "#FFFFFF" }}>{t("Register")}</h1>
            <Form
              name="auth"
              labelCol={{
                span: 8,
              }}
              wrapperCol={
                {
                  //   span: 16,
                }
              }
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <p style={{ textAlign: "center", marginTop: 40 }}>
                <Form.Item
                  name="name"
                  type="text"
                  id="input"
                  rules={[
                    {
                      required: true,
                      message: `${t("Please input your username!")}`,
                    },
                  ]}
                >
                  <Input placeholder={t("Username")} type="name" id="input" />
                </Form.Item>
              </p>
              <p style={{ textAlign: "center" }}>
                <Form.Item
                  name="password"
                  type="password"
                  rules={[
                    {
                      required: true,
                      message: `${t("Please input your password!")}`,
                    },
                  ]}
                >
                  <Input placeholder={t("Password")} id="input" type="password" />
                </Form.Item>
              </p>
              <p style={{ textAlign: "center" }}>
                <Form.Item
                  name="email"
                  type="email"
                  rules={[
                    {
                      required: true,
                      message: `${t("Please input your email!")}`,
                    },
                  ]}
                >
                  <Input placeholder="Email" id="input" type="email" />
                </Form.Item>
              </p>
              <p style={{ textAlign: "center" }}>
                <Form.Item
                  name="avatar"
                  type="img"
                  rules={[
                    {
                      required: true,
                      message:`${t("Please input your avatar!")}` ,
                    },
                  ]}
                >
                  <Input placeholder={t("Avatar")} id="input" type="url" />
                </Form.Item>
              </p>
              <Form.Item
                wrapperCol={{
                  // offset: 8,
                  span: 16,
                }}
              >
                {signup && (
                  <h4
                    style={{
                      color: "green",
                      fontSize: 13,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {t(" Registration was successful")}
                   
                    <h3 style={{ marginLeft: 2 }}>✓</h3>
                  </h4>
                )}
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3 style={{ color: "white", fontSize: 14 }}>
                    {t("Do you have an account?")}
                    
                  </h3>
                  <NavLink to={"/signIn"}>
                    <h3
                      style={{ color: "blue", fontSize: 14 }}
                      onClick={change}
                    >
                      {t("Sign In")}
                    </h3>
                  </NavLink>
                </div>
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
export default SignUp;
