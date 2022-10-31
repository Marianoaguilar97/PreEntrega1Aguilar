import React from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navBar'>
        <Link to={"/"}><h1>Santa Tabla</h1></Link>
        <ul>
            <NavLink to="/"><li>Inicio</li></NavLink>
            <NavLink to="/category/kites"><li>Kites</li></NavLink>
            <NavLink to="/category/tablas"><li>Tablas</li></NavLink>
            <Link to="/cart">
              <CartWidget/> 
              </Link>
        </ul>

    </nav>
  )
}

export default NavBar