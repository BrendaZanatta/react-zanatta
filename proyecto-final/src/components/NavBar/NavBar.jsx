import React from 'react';
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
            </ul>
        </div>
    );
}

export default NavBar;  