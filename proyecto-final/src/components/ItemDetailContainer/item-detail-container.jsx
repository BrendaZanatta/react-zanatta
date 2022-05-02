import React from 'react';
import ItemDetail from '../ItemDetail/item-detail';
import './item-detail-container.css';
import { useState, useEffect } from "react";


function getItem() {
    const myPromise = new Promise((resolve, reject) => {
        const item = {
            id:1,
            title:'Torta Matilda',
            price: '$1200',
            stock: 3,
            imageUrl: 'img1.jpg',
        };
        setTimeout(() => {
            resolve(item);
        }, 2000);
    });
        return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});

    useEffect(() => {
        getItem()
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Se produjo un error');
            });
    }, []);
    return (
        <div className='item'>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer