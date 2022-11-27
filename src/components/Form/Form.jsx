import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { db } from '../../services/firebaseConfig';

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId] = useState('');

  const { cart, totalPrecio, deleteAll } = useContext(CartContext);
  const totalCarrito = totalPrecio();

  const handleName = (e) => setName(e.target.value)

  const handleLastName = (e) => setLastName(e.target.value)

  const handleEmail1 = (e) => setEmail1(e.target.value)

  const handleEmail2 = (e) => setEmail2(e.target.value)

  const handleTelefono = (e) => setTelefono(e.target.value)

  const enviarDatos = (e) => {
    e.preventDefault();
    const orden = {
        buyer: {
            name,
            lastName,
            telefono,
            email1,
        },
        items: cart,
        total: totalCarrito,
        date: serverTimestamp(),
      };

      const orderCollection = collection(db, 'orders');

        addDoc(orderCollection, orden)
            .then((res) => {
                setOrderId(res.id);
                deleteAll();
            })
            .catch((error) => {
                console.log('Hubo un error', error);
            });
            
    };

  

  if (orderId) {
    return (
        <h1>Gracias por tu compra tu número de seguimiento es {orderId}</h1>
    );
}

  return (
    <div>
      <p>No se olvide de verificar correctamente su email</p>
        <form action="" onSubmit={enviarDatos}>
            <input 
                type="text" 
                placeholder='Nombre' 
                name='nombre'
                onChange={handleName}
                value= {name} 
            />
            <input 
                type="text" 
                placeholder='Apellido' 
                name='apellido'
                onChange={handleLastName}
                value= {lastName} 
            />
            <input 
                type="text" 
                placeholder='Email1' 
                name='email1'
                onChange={handleEmail1}
                value= {email1} 
            />
            <input 
                type="text" 
                placeholder='Verifique su mail' 
                name='email2'
                onChange={handleEmail2}
                value= {email2} 
            />
            <input 
                type="text" 
                placeholder='Telefono' 
                name='telefono'
                onChange={handleTelefono}
                value= {telefono} 
            />

            <button disabled={email1 !== email2} >Enviar</button>
        </form>
    </div>
  )
}

export default Form