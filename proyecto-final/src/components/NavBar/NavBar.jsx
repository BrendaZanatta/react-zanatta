import React from 'react';
import CartWidget from '../CartWidget';
import './NavBar.css';


function NavBar(props) {
    return (
        <div>
            <h1 className='logo'>Ocean Cakes</h1>

            <ul className='nav'>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Nosotras</a></li>
                <li><a href='#'>Preguntas Frecuentes</a></li>
                <li><a href='#'>Contacto</a></li>
            <CartWidget/>        
            </ul>
        </div>
    );
}

export default NavBar;  