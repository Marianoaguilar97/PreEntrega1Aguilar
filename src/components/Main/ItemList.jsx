import React from 'react'
import Item from './Item'

const itemList = ({ items }) => {
  return (
    <div className='itemList'>
        {items.map((producto) => {
            return <Item producto={producto} key={producto.id}/>
        })}
    </div>
  )
}

export default itemList