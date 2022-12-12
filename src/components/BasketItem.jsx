import React, { useContext } from "react";
import { ShopContext } from "../context";

const BasketItem = ({id, name, price, quantity}) => {
  
const {removeFromBasket, incrementQuantity, decrementQuantity} = useContext(ShopContext) 
  return (
    <div className="BasketList_body">
      <p>
        {name} <b style={{ color: "red" }}>X</b> {quantity} ={" "}
        {price * quantity} $
      </p>
      <div>
        <button onClick={() => incrementQuantity(id)}>+1</button>
        <button onClick={() => decrementQuantity(id)}>-1</button>
        <i onClick={() => removeFromBasket(id)} class="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default BasketItem;
