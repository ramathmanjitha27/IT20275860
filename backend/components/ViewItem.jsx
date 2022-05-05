import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export default function ViewItem(){

    const id =useParams();

    const [name, setName] = useState("");
    const [price, setprice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");

    useEffect(()=>{
        setName(localStorage.getItem('name'));
        setprice(localStorage.getItem('price'));
        setQuantity(localStorage.getItem('quantity'));
        setDescription(localStorage.getItem('description'));
    },[])

    return (
        <div>
            <h1>Welcome to view item page</h1>
            <h3>Item name : {name}</h3>
            <h3>Item price : {price}</h3>
            <h3>Item quantity : {quantity}</h3>
            <h3>Item description : {description}</h3>

            <br/>
            <Link to={'/item'}>
                <button>Back</button>
            </Link>

        </div>
    )
}