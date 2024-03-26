import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../store/slice/detailSlice";
import { addCart } from "../store/slice/corzinSlice";
import "../i18n/i18n"
import i18next from "../i18n/i18n";
import { useTranslation } from "react-i18next";

const Detail = () => {
  const { dataDetail } = useSelector((state) => state.detail);
  const { t, i18n } = useTranslation();

  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(params.id));
  }, [params.id]);

  const addItem = (item) =>{
       dispatch(addCart({...item, price:20, count:1}))
  }

  console.log(dataDetail);

  return (
    <div>
      <div>
        <img width={400} src={dataDetail?.strMealThumb} alt="" />
        <h1>{dataDetail?.strMeal}</h1>
        
        <button onClick={()=>addItem(dataDetail)}>{t("Add to Cart")}</button>
      </div>
    </div>
  );
};

export default Detail;
