import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
    
  const enviarDatos = (e) => {
    e.preventDefault();
  }

  const handleName = (e) => setName(e.target.value)

  const handleLastName = (e) => setLastName(e.target.value)

  const handleEmail = (e) => setEmail(e.target.value)
  
  return (
    <div>
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
                placeholder='Email' 
                name='email'
                onChange={handleEmail}
                value= {email} 
            />
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form