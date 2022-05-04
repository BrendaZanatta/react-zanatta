import React from "react";
import './item.css';
import { Link } from 'react-router-dom';    

function Item ({item}) {
    return (
        <div className="tarjetasProductos">
            <div className="texto">{item?.title}</div>
            <div className="imgContenedor">
                <div className="imagen">
                    <img className="tarjetaImagen" src={item?.imageUrl} alt="Imagen no disponible" />
                </div>
                <Link to={'/item/' + item?.id} className="BotonDetalle hvr-rectangle-out"> Ver detalle</Link> 
            </div>
            <div className="texto">{item?.price}</div>
        </div>
    )
}

export default Item