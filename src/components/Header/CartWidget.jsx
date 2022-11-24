import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {
  
  const { totalUnidades } = useContext(CartContext);
  
  return (
   <span className="material-symbols-outlined">
    shopping_cart_checkout{totalUnidades() !== 0 && totalUnidades()}
    </span>
  )
}

export default CartWidget