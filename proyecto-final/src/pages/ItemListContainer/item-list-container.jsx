import React from 'react'
import './item-list-container.css';
import ItemList from '../../components/ItemList/item-list';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where, limit} from 'firebase/firestore';

function getProducts(category) {
  const db = getFirestore();

  const itemCollection = collection(db, 'items');

  const q = query(
    itemCollection
  );

  return getDocs(q);
}

function ItemListContainer({ greeting }) {

  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then(snapshot => {
        setProducts(snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id}
        }));
      })
      .catch(err => {
        console.log(err);
        alert('hubo un error');
      });
  }, [categoryId]);

  return (
    <div className='contenido'>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;