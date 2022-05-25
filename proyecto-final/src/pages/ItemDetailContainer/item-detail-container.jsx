import React from 'react';
import ItemDetail from '../../components/ItemDetail/item-detail';
import './item-detail-container.css';
import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore} from 'firebase/firestore';


const ItemDetailContainer = () => {

    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState() 
    const [load, setLoad] = useState(true) 

    const getSelected = async(idItem) =>{
        try {
            setLoad(true)
            const document = doc(db, "Items", idItem)
            const response = await getDoc(document)
            const result = {id: response.id, ...response.data()}
            
            setSelectedItem(result)
            setLoad(false)

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getSelected(id)
    }, [id])

    return (
        <>
        <ItemDetail item={selectedItem} />
        </>
    )
}

export default ItemDetailContainer



