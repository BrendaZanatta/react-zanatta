import React from 'react';
import CartWidget from '../CartWidget/cart-widget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';


function NavBar(props) {
    return (
        <div className='contenedor'>
            <img
                src='logo.JPG'
                alt='imagen no disponible'
            />    
    
            <ul className='nav'>
                <li><NavLink to='/category/inicio'>Inicio</NavLink> </li>
                <li><NavLink to='/category/productos'>Productos</NavLink></li>
                <li><NavLink to='/category/nosotras'>Nosotras</NavLink></li>
                <li><NavLink to='/category/preguntasfrecuentes'>Preguntas Frecuentes</NavLink></li>
                <li><NavLink to='/category/contacto'>Contacto</NavLink></li>        
            </ul>
            <CartWidget/>
        </div>
    );
}

export default NavBar;  