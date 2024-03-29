import React, { useContext } from "react";
import { ShopContext } from "../context";

const GoodItem = ({id, full_background, price, name, description}) => {

  const {addToBasket} = useContext(ShopContext);
  return (
    <div className="GoodItem">
      <img src={full_background} alt={name} />
      
        <div className="GoodItem_name">
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="GoodItem_buy">
          <button onClick={() => addToBasket({id, name, price})}>Buy</button>
          {price} $
        </div>
      
    </div>
  );
};

export default GoodItem;
