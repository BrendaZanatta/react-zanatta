import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Bubble from '../Bubble/bubble';
import './cart-item.css';

function CartItem({ item }) {
const cartCtx = useContext(CartContext);

    return (
    <>
        <div className='tarjetaCarrito'>
            <div className='imagenCarrito'>
                <img src={ item?.imageUrl } alt="Imagen del producto" />
            </div>
            <p>{ item?.title }</p>
            <p>${ item?.price }</p>
        </div>
        <div className='botonEliminar'>
            <Bubble isButton onBubbleClick={() => cartCtx.removeProduct(item.id)}>X</Bubble>
        </div>
        <div className='botonCantidad'>
            <Bubble>{ item?.quantity }</Bubble>
        </div>
    </>
    )
}

export default CartItem