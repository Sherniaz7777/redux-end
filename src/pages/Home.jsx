import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeal } from "../store/slice/cartSlice";
import { NavLink } from "react-router-dom";
import "../i18n/i18n"
import i18next from "../i18n/i18n";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { dataMeals } = useSelector((state) => state.meal);
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeal());
  }, []);

  if (dataMeals === null) {
    return <h1 style={{textAlign:"center"}}>{t("Loading...")}</h1>;
  }

  console.log(dataMeals);
  return (
    <div style={{width:1200, margin: 'auto'}}>
      <div style={{display:"flex", gap:20, flexWrap: 'wrap'}}>
        {dataMeals.map((el) => (
          
            <div key={el.idMeal} style={{width:350}}>
              <img width={350} src={el.strMealThumb} alt="" />
              <br />
              <p>{el.strMeal}</p>
              <br />
              <NavLink to={`/detail/${el.idMeal}`}>

              <button>{t("More")}</button>
              </NavLink>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default Home;
