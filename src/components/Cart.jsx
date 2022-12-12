import React, { useContext } from 'react'
import { ShopContext } from '../context'

const Cart = () => {
  const { order ,handleBasketShow = Function.prototype} = useContext(ShopContext)
  const quantity = order.length
  return (
    <div className='cart' onClick={handleBasketShow}>
        <i class="fa-solid fa-cart-plus"></i>
        {quantity? <span>{quantity}</span>: null}
    </div>
  )
}

export default Cart