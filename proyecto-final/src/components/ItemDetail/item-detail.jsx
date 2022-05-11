import React, { useState, useContext, useEffect } from "react";
import './item-detail.css';
import ItemCount from "../ItemCount/item-count";
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';


function ItemDetail({item}) {
    const cartCtx = useContext(CartContext);

    function addHandler(quantityToAdd){
        cartCtx.addProduct({quantity: quantityToAdd, ...item});
    }
    return(
        <div className="cajaUno">
            <div className="cajaDos">
                <div className="cajaImagen">
                    <img src={item?.imageUrl} alt="imagen no disponible"/>
                </div>
            </div>
        <div className="cajaInfo">
            <div className="cajaDetalle">
                <h2>{item?.title}</h2>
                <p>{item?.price}</p>
                <div className="botonesCarrito">
                    <ItemCount initial={1} stock={item.stock} onAdd={addHandler}/>
                    <button onClick={() => console.log(cartCtx.products)} >Imprimir carrito</button>
                    <button onClick={() => cartCtx.removeProduct(item.id)} >Eliminar producto</button>
                    <button onClick={() => cartCtx.clear()} >Vaciar carrito</button>
                    <button onClick={() => console.log(cartCtx.isInCart(item.id))} >Is in cart</button>
                    <button onClick={() => console.log(cartCtx.getCartQuantity())} >Quantity</button>
                    {cartCtx.products.length &&
                        <button onClick={() => console.log(cartCtx)}>
                            <Link to='/cart'>
                                Finalizar compra ({ cartCtx.getCartQuantity() } items)
                            </Link>
                        </button>
                    }
                </div>
            </div>
        </div>
        </div>    
    )
}

export default ItemDetail