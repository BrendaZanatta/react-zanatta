import React from 'react'
import ItemCount from '../ItemCount/item-count';
import './item-list-container.css';
import ItemList from '../ItemList/item-list';
import { useState, useEffect } from "react";

function getProducts() {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id:1,
        title:'Torta Matilda',
        price: '$1200',
        imageUrl: 'img1.jpg',
      },
      {
        id:2,
        title: 'Cheescake',
        price: '$1300',
        imageUrl: 'img2.jpg',
      },
      {
        id:3,
        title: 'Torta Oreo',
        price: '$1500',
        imageUrl: 'img3.jpg',
      },
      {
        id:4,
        title: 'Torta Brownie',
        price: '$1800',
        imageUrl: 'img4.jpg',
      },
    ];
  
    setTimeout(() => {
      resolve(productsList);
    }, 2000);
  });
  return myPromise;
}

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => {
        setProducts(res);
      })
  }, []);

  return (
    <div className='contenido'>
      <p>{ greeting }</p>
      <ItemList items={products} />
      <ItemCount stock={5} initial={1}/>
    </div>
  );
};

export default ItemListContainer;