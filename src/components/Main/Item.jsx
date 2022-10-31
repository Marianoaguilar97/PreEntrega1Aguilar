import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className='item'>
            <img src={producto.img} width="200px" alt={producto.title} />
                <h2>{producto.title}</h2>
                <div>
                    <h5>${producto.price}.-</h5>
                </div>
            <Link to={`/detail/${producto.id}`}>Comprar</Link>
        </div>
  )
}

export default Item