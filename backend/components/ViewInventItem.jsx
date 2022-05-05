import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

export default function  ViewInventItem(){

    const id = useParams();

    const [name, setInName] = useState("");
    const [price, setInprice] = useState("");
    const [quantity, setInQuantity] = useState("");
    const [description, setInDescription] = useState("");

    useEffect(()=>{
        setInName(localStorage.getItem('name'));
        setInprice(localStorage.getItem('price'));
        setInQuantity(localStorage.getItem('quantity'));
        setInDescription(localStorage.getItem('description'));
    },[])



        function sendData(e) {
            const newInventItem = {
                name,
                price,
                description,
                quantity
            }

            axios.put('http://localhost:3001/item/edititem'+id, newInventItem).then(() => {
                alert("Item details updated")
                window.location.href = "/traderhome";
            }).catch((err) => {
                alert(err)
            })
        }

    return (
        <div>
            <h1>Edit Item Page (Inventory)</h1>

            <form onSubmit={sendData}>
                <label>Item Name </label>
                <input type="text" id="name" placeholder="Enter Item Name" value={name}
                       onChange={(e) =>(
                           setInName(e.target.value)
                       )}
                />
                <br/>

                <label>Price </label>
                <input type="text" id="price" placeholder="Enter Price" value={price}
                       onChange={ (e) =>(
                           setInprice(e.target.value)
                       )}
                />
                <br/>

                <label>Quantity </label>
                <input type="text" id="quantity" placeholder="Enter Quantity" value={quantity}
                       onChange={(e)=>(
                           setInQuantity(e.target.value)
                       )}
                />
                <br/>

                <label>Description </label>
                <input type="text" id="description" placeholder="Enter Quantity" value={description}
                       onChange={(e)=>(
                           setInDescription(e.target.value)
                       )}
                />
                <br/>
                <br/>

                <input type="submit"/>
                <br/>
                <Link to={'/inventory'}>
                    <button>Back</button>
                </Link>

            </form>

        </div>
    )
}