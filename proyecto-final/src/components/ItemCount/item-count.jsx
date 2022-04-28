import React, { useState } from 'react';
import './item-count.css'

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial);

    const onAumenta = () => {
        const newValue = count + 1;
        if (newValue <= stock) {
            setCount(newValue);
        }
    };
    const onDisminuye = () => {
        const newValue = count - 1;
        if (newValue >= initial) {
            setCount(newValue);
        }
    };
    const onAdd = () => {
        const mensaje = `Se agregaron ${count} productos al carrito`;
        count === 1 ? alert(mensaje) : alert(`${mensaje}s`);
    };

    return (
        <div className='cajaBotones'>
            <div>
                <button onClick={onDisminuye}> - </button>
                <input readOnly value={count} />
                <button onClick={onAumenta}> + </button>
            </div>
        <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
};  
export default ItemCount;

