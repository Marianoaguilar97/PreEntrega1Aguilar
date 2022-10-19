import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='mensajeBienvenida'>
      <p className='textoMensajeBienvenida'>{greeting}</p>
      </div>
  )
}

export default ItemListContainer