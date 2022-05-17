import React, { useContext } from 'react'
import './cart-widget.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Bubble from '../Bubble/bubble';
import CartContext from '../../store/cart-context';

function CartWidget() {
  const cartCtx = useContext(CartContext);

  return (
    <div className='carrito'>
      <Link to='/cart'>
      <FontAwesomeIcon icon={ faCartShopping } /> 
      </Link>
      {cartCtx.products.length !== 0 && 
          <div className='carritoBubble'>
            <Bubble>
              { cartCtx.getCartQuantity() }
            </Bubble>
          </div>  
      }
      </div>  
  );
}


export default CartWidget