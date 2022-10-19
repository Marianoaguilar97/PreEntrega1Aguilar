import React from 'react'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <nav className='navBar'>
        <h1>Santa Tabla</h1>
        <ul>
            <a href="index.html"><li>Inicio</li></a>
            <a href="index.html"><li>Kites</li></a>
            <a href="index.html"><li>Tablas</li></a>
            <a href="index.html"><li>Barra</li></a>
            <a href="index.html"><li>Accesorios</li></a> 
            <a href="index.html"><CartWidget /> </a>
        </ul>

    </nav>
  )
}

export default NavBar