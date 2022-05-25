import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/cart-item';
import './cart.css';
import { CartContext } from './store/cart-context';

const Cart = () => {
    const {cartCtx, clear} = useContext(CartContext);

    return (
    <div className='tarjetaTotal'>
        {cartCtx.products.map(p => <CartItem item={p} key={p.id}/>)}
        {cartCtx.products.length !== 0 ?
        <div className='botonTerminar'>
            <p>Precio total: ${cartCtx.getTotalPrice()}</p>
            <button className="botones" onClick={clear}>Vaciar Carrito</button>
            <Link to='/checkout'>
            <button className='botones'>Terminar compra</button>
            </Link>
        </div> :
        <>
            <h2>No hay productos en el carrito</h2>
            <button className='botones'>
            <Link to='/'>Ir al inicio</Link>
            </button>
        </>
        }
    </div>
    )
}

export default Cart