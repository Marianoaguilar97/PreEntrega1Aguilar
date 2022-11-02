import React from 'react'
import { getProduct } from '../../mock/productos';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const  [item, setItem] = useState({});

    const {idProd} = useParams();
  
  useEffect(() => {
    
    
      getProduct(idProd)
      .then((res) => {
          setItem(res);
      })
}, [idProd]);
      
  return (
    <div className='contenedorDetalle'>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer