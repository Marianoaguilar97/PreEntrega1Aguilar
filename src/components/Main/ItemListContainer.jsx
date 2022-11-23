import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../mock/productos'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const  [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryName} = useParams();
  
  useEffect(() => {
    
      getProducts(categoryName)
      .then((res) => {
          setItems(res);
      })
      .finally(() => {
        setLoading(false);
    });

    return () => setLoading(true);
}, [categoryName]);

if (loading) {
  return (
    <div className='contenedor'>
        <h1>Cargando...</h1>
    </div>
  )
}
      
  return (
    <div className='contenedor'>
        <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer