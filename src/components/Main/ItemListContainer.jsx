import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../mock/productos'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const  [items, setItems] = useState([]);

    const {categoryName} = useParams();
  
  useEffect(() => {
    
      getProducts(categoryName)
      .then((res) => {
          setItems(res);
      })
}, [categoryName]);
      
  return (
    <div className='contenedor'>
        <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer