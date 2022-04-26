import React from 'react'
import ItemCount from '../ItemCount/item-count';
import './item-list-container.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='contenido'>
      <p>{ greeting }</p>
      <ItemCount stock={5} initial={1}/>
    </div>
  );
};

export default ItemListContainer;