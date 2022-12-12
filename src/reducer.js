import { toast } from "react-toastify";

export function reducer(state, {type, payload}){

    switch(type){

         case 'ADD_TO_BASKET' :
         {
            const itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload.id);
            
            let newOrder = null;
            if(itemIndex < 0){
              const newItem = {
                ...payload, quantity:1
              };
              newOrder=[...state.order, newItem]
            }
            else{
                newOrder = state.order.map((orderItem, index) => {
                if(itemIndex === index){
                  return{ ...orderItem, quantity: orderItem.quantity + 1};
                }
                else{
                 return orderItem;
                }  
              })
              toast.success('Good added to basket successfully')
            }
            return{
                ...state, order: newOrder
            }
         };
         case 'INCREMENT_QUANTITY' : 
         {
            const newOrder = state.order.map(item => {
                if(item.id === payload.id){
                   const newQuantity = item.quantity +1 
                   return{
                    ...item, quantity: newQuantity > 0 ?
                    newQuantity: 0
                   }
                }else{
                    return item
                }
            })
            return {
                ...state, order: newOrder
            }
         };
         case 'DECREMENT_QUANTITY' : 
         {
            const newOrder = state.order.map(item => {
                if(item.id === payload.id){
                   const newQuantity = item.quantity - 1 
                   return{
                    ...item, quantity: newQuantity > 0 ?
                    newQuantity: 0
                   }
                }else{
                    return item
                }
            })
            return {
                ...state, order: newOrder
            }
         };
         case 'TOOGLE_BASKET' : 
         {
            return{
                ...state, isBasketShow: !state.isBasketShow
            }
         };
         case 'REMOVE_FROM_BASKET' : 
         {
             toast.error(('Good removed to basket successfully'))
            return {
                ...state, order: state.order.filter(item => item.id !== payload.id)
            }
         }
         case 'SET_GOODS' : 
         {
            return{
                ...state, goods: payload || [] , loading: false
            }
         }




        default: return state
    }


}