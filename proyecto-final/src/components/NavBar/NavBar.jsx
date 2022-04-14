import React from 'react';
import './NavBar.css';
<link href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap" rel="stylesheet"></link>

function NavBar(props) {
    return (
        <div>
            <h1 className='logo'>Ocean Cakes</h1>

            <ul className='nav'>
                <a href='#'>Inicio</a>
                <a href='#'>Productos</a>
                <a href='#'>Nosotras</a>
                <a href='#'>Preguntas Frecuentes</a>
                <a href='#'>Contacto</a>
            </ul>
        </div>
    );
}

export default NavBar;