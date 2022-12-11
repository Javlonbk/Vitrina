import React from 'react'
import GoodItem from './GoodItem'

const GoodList = ({goods, addToBasket}) => {
  return (
    <div className='GoodList'>
      {
        goods.map(good => {
          return <GoodItem key={good.id} {...good} addToBasket={addToBasket} />
        })
      }
              
    </div>
  )
}

export default GoodList
