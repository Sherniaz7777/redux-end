import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeCart } from "../store/slice/corzinSlice";
import { useTranslation } from "react-i18next";
import "../i18n/i18n"
import i18next from "../i18n/i18n";


const Cart = () => {
  const { corzinka } = useSelector((state) => state.cart);
  const { t, i18n } = useTranslation();

  const total = corzinka.reduce((total, el) => total + el.price  * el.count, 0);

  console.log(corzinka);
  const dispatch = useDispatch()

 const cartDel = (id) =>{
     dispatch(removeCart(id))
 }
 const plus = (id) =>{
  dispatch(incrementQuantity({id}))
 }
 const minus = (id) =>{
      dispatch(decrementQuantity({id}))
 }
 if (corzinka.length === 0) {
  return <h2 style={{textAlign:"center"}}>{t("No Found")}</h2>
  
 }

  return (
    <div style={{ width: 1200, margin: "auto", paddingTop: 20 }}>
      <div>
        {corzinka?.map((el) => (
          <div
            key={el.idMeal}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <img width={70} src={el.strMealThumb} alt="" />
            <h3>{el.strMeal}</h3>
            <p>Price: ${el.price}.00</p>
           
              <button onClick={()=>minus(el.idMeal)} >{el.count === 1 ? <i className="bi bi-trash-fill" onClick={()=>cartDel
                (el.idMeal)}></i> : "-"}</button>
              <span>{el.count}</span>
              <button onClick={()=>plus(el.idMeal)}>+</button>
               <span>{el.price * el.count}</span>
            <button onClick={()=>cartDel(el.idMeal)}>X</button>
          </div>
        ))}
      </div>
      <h3 style={{ textAlign: "end", marginTop: 20 }}>{t("Total")} : ${total}</h3>
    </div>
  );
};

export default Cart;
