import React from 'react';
import ItemDetail from '../../components/ItemDetail/item-detail';
import './item-detail-container.css';
import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';


function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const productsList = [
            {
            id:1,
            title:'Torta Matilda',
            price: '$1200',
            stock: 5,    
            category: 'productos',
            imageUrl: '/img1.jpg',
            },
            {
            id:2,
            title: 'Cheescake',
            price: '$1300',
            stock: 5,
            category: 'productos',
            imageUrl: '/img2.jpg',
            },
            {
            id:3,
            title: 'Torta Oreo',
            price: '$1500',
            stock: 5,
            category: 'productos',
            imageUrl: '/img3.jpg',
            },
            {
            id:4,
            title: 'Torta Brownie',
            price: '$1800',
            stock: 5,
            category: 'productos',
            imageUrl: '/img4.jpg',
            },
            {
            id:5,
            title: 'Torta Rogel',
            price: '$1900',
            stock: 5,
            category: 'productos',
            imageUrl: '/img5.jpg',
            },
            {
            id:6,
            title: 'Lemon Pie',
            price: '$1550',
            stock: 5,
            category: 'productos',
            imageUrl: '/img6.jpg',
            },   
            {
            id:7,
            title: 'Letter Cake',
            price: '$1600',
            stock: 5,
            category: 'productos',
            imageUrl: '/img7.jpg',
            },
            {
            id:8,
            title: 'Drip Cake',
            price: '$2000',
            stock: 5,
            category: 'productos',
            imageUrl: '/img8.jpg',
            },
        ];
        const item = productsList.filter(item => item.id == id);
        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
    });
        return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getItem(id)
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Se produjo un error');
            });
    }, [id]);
    return (
        <div className='item'>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer