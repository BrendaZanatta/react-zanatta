import React from "react";
import Item from '../Item/item';
import './item-list.css';

function ItemList({ items }) {
    return (
        <div className="itemList">
            {items.map(item => <Item item={item} key={item.id} />)}
        </div>
    )
}

export default ItemList