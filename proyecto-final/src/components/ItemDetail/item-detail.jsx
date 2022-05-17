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
                <p>${item?.price}</p>
                <div className="botonesCarrito">
                    <ItemCount initial={1} stock={item.stock} onAdd={addHandler}/>
                    {cartCtx.isInCart(item.id) &&
                        <button>
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