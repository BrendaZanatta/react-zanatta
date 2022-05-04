import React from "react";
import './item-detail.css';
import ItemCount from "../ItemCount/item-count";


function ItemDetail({item}) {
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
                    <ItemCount initial={1} stock={item.stock} onAdd={() => {}}/>
                </div>
            </div>
        </div>
        </div>    
    )
}

export default ItemDetail