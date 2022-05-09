import React, { useState } from "react";
import './item-detail.css';
import ItemCount from "../ItemCount/item-count";
import { Link } from 'react-router-dom';


function ItemDetail({item}) {
    const [cantidadProductos, setCantidadProductos] = useState(null);
    function addHandler(quantityToAdd){
        setCantidadProductos(quantityToAdd);
    }
    return(
        <div className="cajaUno">
            <div className="cajaDos">
                <div className="imagen">
                    <img src={item?.imageUrl} alt="imagen no disponible"/>
                </div>
            </div>
        <div className="cajaInfo">
            <div className="cajaDetalle">
                <h2>{item?.title}</h2>
                <p>{item?.price}</p>
                <div>
                    { cantidadProductos ?
                    <button className="AgregarCarrito"><Link to='/cart'>Agregar al carrito ({cantidadProductos} items)</Link></button> :
                    <ItemCount initial={1} stock={item.stock} onAdd={addHandler}/>
                }
                </div>
            </div>
        </div>
        </div>    
    )
}

export default ItemDetail