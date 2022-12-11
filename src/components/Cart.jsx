import React from 'react'

const Cart = (props) => {
  const {quantity = 0, handleBasketShow = Function.prototype} = props;
  return (
    <div className='cart' onClick={handleBasketShow}>
        <i class="fa-solid fa-cart-plus"></i>
        {quantity? <span>{quantity}</span>: null}
    </div>
  )
}

export default Cart