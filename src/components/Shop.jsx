import React, { useEffect, useContext } from 'react';
import { API_key, API_url } from '../config'
import { ShopContext } from '../context';
import BasketList from './BasketList';
import Cart from './Cart';
import GoodList from './GoodList';
import Loader from './Loader';

const Shop = () => {

    const {order, setGoods, loading, isBasketShow} = useContext(ShopContext)

    useEffect(() => {
         fetch(API_url, {
          headers: {
            Authorization: API_key,
          }
         })
         .then((response) => response.json())
         .then((data) => {
          setGoods(data.featured)
         })
        
    }, [])

 
  return (
    <div className='content'>
      <Cart quantity={order.length} />
         {  
            loading ? <Loader/> : <GoodList />
         }
      {
      isBasketShow  && 
      <BasketList  />
      }
      
    </div>
  )
}

export default Shop