import React from 'react'
import './cart-widget.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";

export default function App() {

  return (
    <div className='carrito'>
      <FontAwesomeIcon icon={ faCartShopping } /> 
    </div>    
  );
}
