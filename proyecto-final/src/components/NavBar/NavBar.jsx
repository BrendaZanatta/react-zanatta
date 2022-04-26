import React from 'react';
import CartWidget from '../CartWidget';
import './NavBar.css';


function NavBar(props) {
    return (
        <div className='contenedor'>
            <img
                src='logo.JPG'
                alt='imagen no disponible'
            />    
    
            <ul className='nav'>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Nosotras</a></li>
                <li><a href='#'>Preguntas Frecuentes</a></li>
                <li><a href='#'>Contacto</a></li>        
            </ul>
            <CartWidget/>
        </div>
    );
}

export default NavBar;  