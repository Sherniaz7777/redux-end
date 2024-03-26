import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUser, loginUser } from "../store/slice/loginSlice";
import { useTranslation } from "react-i18next";
import "../i18n/i18n"
import i18next from "../i18n/i18n";

const Header = ({ setIsvisible, isvisible }) => {
  const { corzinka } = useSelector((state) => state.cart);
  const { accessToken } = useSelector((state) => state.login);
  const [searchQuery, setSearchQuery] = useState("");
  const { t, i18n } = useTranslation();
  const [active, setActive]=useState("en")

  const dispatch = useDispatch();

  const  ChangeLng = (Lange) => {
    const Langes=Lange.toLowerCase()
    i18n.changeLanguage(Langes)
    setActive(Langes)
 }


  useEffect(() => {
    dispatch(loginUser());
  }, []);
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const LogOut = () => {
    location.reload();
    localStorage.removeItem("Token");
  };

  if (accessToken) {
    setIsvisible(true);
  } else {
    setIsvisible(false);
  }

  const handlAddSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      window.location.href = `/search/${searchQuery}`;
      setSearchQuery("");
    }
  };

  console.log(accessToken);
  console.log(searchQuery);
  return (
    <div style={{ width: 1250, margin: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        <NavLink to={"/"}>
          <button>{t("Home")}</button>
        </NavLink>

        <form onSubmit={handlAddSearch}>
          <input
            type="text"
            placeholder={t("Search...")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>{t("Search")}</button>
        </form>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ marginTop: 15 }}>
            <div
              style={{
                width: 35,
                height: 35,
                backgroundColor: "black",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                width={25}
                height={25}
                style={{ borderRadius: "100%" }}
                src={accessToken?.avatar}
                alt=""
              />
            </div>
            <p>{accessToken?.name}</p>
          </div>

          {!isvisible && (
            <NavLink to={"/signIn"}>
              <button>{t("Sign In")}</button>
            </NavLink>
          )}
          {!isvisible && (
            <NavLink to={"/signUp"}>
              <button>{t("Sign Up")}</button>
            </NavLink>
          )}

          {isvisible && <button onClick={() => LogOut()}>{t("Log Out")}</button>}

          <button
            className={active === "en" ? "active" : ""}
            onClick={(e) => ChangeLng(e.target.innerText)}
          >
            EN
          </button>
          <button
            className={active === "kg" ? "active" : ""}
            onClick={(e) => ChangeLng(e.target.innerText)}
          >
            KG
          </button>

          <NavLink to={"/cart"}>
            {t("Cart")}
            <span>{corzinka.length}</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
