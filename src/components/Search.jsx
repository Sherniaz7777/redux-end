import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../store/slice/searchSlice";
import { NavLink, useParams } from "react-router-dom";
import "../i18n/i18n"
import i18next from "../i18n/i18n";
import { useTranslation } from "react-i18next";

const Search = ({ setIsvisible2, isvisible2 }) => {
  const { dataSearch } = useSelector((state) => state.search);
  const paramas = useParams();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();


  useEffect(() => {
    dispatch(getSearch(paramas.name));
  }, [dispatch, paramas.name]);


  useEffect(() => {
    setIsvisible2(!!dataSearch);
  }, [dataSearch, setIsvisible2]);

  return (
    <div style={{ width: 1200, margin: "auto" }}>
      {!isvisible2 && <h2 style={{ textAlign: "center" }}>{t("No meals found")}</h2>}

      {isvisible2 && (
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {dataSearch?.map((el) => (
            <div key={el.idMeal} style={{ width: 350 }}>
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
      )}
    </div>
  );
};

export default Search;
