import React from 'react';
import CartWidget from '../CartWidget/cart-widget';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';


function NavBar(props) {
    return (
        <div className='contenedor'>
            <Link to='/'>
            <img src={process.env.PUBLIC_URL + '/logo.JPG'} alt='imagen no disponible'/>    
            </Link>
    
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