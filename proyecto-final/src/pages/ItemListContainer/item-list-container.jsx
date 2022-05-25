import React from 'react'
import './item-list-container.css';
import ItemList from '../../components/ItemList/item-list';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where, limit} from 'firebase/firestore';


const ItemListContainer = () => {

  const { categoryId } = useParams()

  const [items, setItems] = useState() 
  const [load, setLoad] = useState(true) 

  const getData = async (category) =>{
    try {
      setLoad(true)
      const document = category ? query(collection(db,"Items"),where('category','==',category))
                                : collection(db,"Items")
      const col = await getDocs(document)
      const result = col.docs.map((doc) => doc = { id:doc.id,...doc.data()})
      setItems(result)
      setLoad(false)
    } catch (error) {
      console.log(error)
    }
  }  

  useEffect(() => {
    getData(categoryId)
  }, [categoryId])
  
  return (
    <>
      <ItemList data={items} />
    </>
  );
};

export default ItemListContainer;

