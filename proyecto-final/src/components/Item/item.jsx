import React, { useContext } from "react";
import './item.css';
import { Link } from 'react-router-dom';   
import CartContext from '../../store/cart-context';
import Bubble from '../Bubble/bubble'; 

function Item ({item}) {
    const cartCtx = useContext(CartContext);

    return (
        <div className="tarjetasProductos">
            <div className="texto">{item?.title}</div>
            <div className="imgContenedor">
                <div className="imagen">
                    <img className="tarjetaImagen" src={item?.imageUrl} alt="Imagen no disponible" />
                </div>
                <Link to={'/item/' + item?.id} className="BotonDetalle hvr-rectangle-out"> Ver detalle</Link> 
            </div>
            <div className="texto">${item?.price}</div>
            <div className='bubbleMas'>
                <Bubble isButton onBubbleClick={() => cartCtx.addProduct({quantity: 1, ...item})}>+</Bubble>
            </div>
        </div>
    )
}

export default Item