import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { API_key, API_url } from '../config'
import BasketList from './BasketList';
import Cart from './Cart';
import GoodList from './GoodList';
import Loader from './Loader';

const Shop = () => {

    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false);

    useEffect(() => {
         fetch(API_url, {
          headers: {
            Authorization: API_key,
          }
         })
         .then((response) => response.json())
         .then((data) => {
          setGoods(data.featured)
          setLoading(false)
         })
        
    }, [])

    const addToBasket = (item) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
        
        if(itemIndex < 0){
          const newItem = {
            ...item, quantity:1
          };
          setOrder([...order, newItem])
        }
        else{
          const newOrder = order.map((orderItem, index) => {
            if(itemIndex === index){
              return{ ...orderItem, quantity: orderItem.quantity + 1};
            }
            else{
             return orderItem;
            }  
          });
          setOrder(newOrder) 
        }
        toast.success('Product added successfully!')
    }
    
    const handleBasketShow = () => {
      setIsBasketShow(!isBasketShow)
    }

    const removeFromBasket = (itemId) => {
      const newOrder = order.filter(item => {
        return item.id !== itemId
      })
      setOrder(newOrder)
      toast.success('Product deleted successfully!')
    }
    const decrementQuantity = (itemId) => {
      const newOrder = order.map(item => {
        if(item.id === itemId){
          const newQuantity = item.quantity - 1;
          return{
            ...item, quantity: newQuantity > 0 ? newQuantity : 0
          }
        }else{
          return item
        }
      })
      setOrder(newOrder)
    }
    const incrementQuantity = (itemId) => {
      const newOrder = order.map(item => {
        if(item.id === itemId){
          const newQuantity = item.quantity + 1;
          return{
            ...item, quantity: newQuantity > 0 ? newQuantity : 0
          }
        }else{
          return item
        }
      })
      setOrder(newOrder)
    }

  return (
    <div className='content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
         {  
            loading ? <Loader/> : <GoodList goods = {goods} addToBasket={addToBasket} />
         }
      {isBasketShow  && <BasketList  order={order} handleBasketShow={handleBasketShow}
      removeFromBasket={removeFromBasket}
      decrementQuantity={decrementQuantity}
      incrementQuantity={incrementQuantity}
      />}
      
    </div>
  )
}

export default Shop