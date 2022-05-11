import React from 'react'
// import ItemCount from '../ItemCount/item-count';
import './item-list-container.css';
import ItemList from '../../components/ItemList/item-list';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function getProducts(category) {
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
    
    const productsFiltered = category ? productsList.filter(p => p.category === category) : productsList
    setTimeout(() => {
      resolve(productsFiltered);
    }, 2000);
  });
  return myPromise;
}

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then(res => {
        setProducts(res);
      })
  }, [categoryId]);

  return (
    <div className='contenido'>
      <p>{ greeting }</p>
      <ItemList items={products} />
      {/* <ItemCount stock={5} initial={1}/> */}
    </div>
  );
};

export default ItemListContainer;