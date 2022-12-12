import React, { useContext } from 'react'
import { ShopContext } from '../context'
import GoodItem from './GoodItem'

const GoodList = () => {
  const {goods} = useContext(ShopContext);
  return (
    <div className='GoodList'>
      {
        goods.map(good => {
          return <GoodItem key={good.id} {...good} />
        })
      }
              
    </div>
  )
}

export default GoodList
