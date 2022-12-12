import React, { useContext } from "react";
import { ShopContext } from "../context";
import BasketItem from "./BasketItem";

const BasketList = () => {


   const { order, handleBasketShow} = useContext(ShopContext)

    const totalPrice = order.reduce((sum, value) => {
        return sum + value.price * value.quantity
    }, 0)

  return (
    <div className="Basket-back">
      <div className="BasketList">
        <div className="BasketList_header">
          Basket <i onClick={handleBasketShow} class="fa-solid fa-xmark"></i>
        </div>
        {!order.length ? (
          <div className="BasketList_body">Nothing add to cart!</div>
        ) : (
          order.map((item) => {
            return (
             <BasketItem key={item.id} {...item}  />
            );
          })
        )}
        <div className="BasketList_footer">Total Price: {totalPrice}</div>
      </div>
    </div>
  );
};

export default BasketList;
