import React from 'react';
import ItemDetail from '../../components/ItemDetail/item-detail';
import './item-detail-container.css';
import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore} from 'firebase/firestore';


function getItem(id) {
    const db = getFirestore();

    const itemRef = doc(db, 'items', id);

    return getDoc(itemRef);
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getItem(id)
            .then(snapshot => {
                setItem( {...snapshot.data(), id: snapshot.id});
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