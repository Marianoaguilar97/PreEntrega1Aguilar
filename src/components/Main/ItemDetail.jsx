import React from 'react'
import Contador from './Contador';


const ItemDetail = ({item}) => {
    
    const onAdd = (qty) => console.log(qty);
    return (
        <div className='detalle'>
            <img src={item.img} alt={item.title} />
            <div className='detalleContenido'>
                <h2>{item.title}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus optio, necessitatibus iusto odit cupiditate a quae
                    tempora dolor earum laboriosam hic distinctio. Nemo odit
                    laboriosam quasi! Temporibus fugit omnis deleniti?
                </p>
                <h3>${item.price}</h3>
                <Contador stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail