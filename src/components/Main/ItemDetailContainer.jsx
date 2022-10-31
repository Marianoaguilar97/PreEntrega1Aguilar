import React from 'react'
import { products } from '../../mock/productos';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const  [item, setItem] = useState({});

    const {idProd} = useParams();
  
  useEffect(() => {
    
    const getProduct = () => {
        return new Promise((res) => {
           const product = products.find((product) => product.id === 1)
            setTimeout(() => {
                res(product);
            }, 2000);
        });
      };
      getProduct()
      .then((res) => {
          setItem(res);
      })
}, []);
      
  return (
    <div className='contenedor'>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer