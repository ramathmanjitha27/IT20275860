import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function AddItem(){

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescrip] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (event) => {
        const newItem = {
            name,
            price,
            description,
            quantity
        }

        axios.post('http://localhost:3001/item', newItem).then(()=>{
            alert(`The item added Successfully`)
            window.location.href = "/traderhome";

        }).catch((err)=>{
            alert(err)
        })
    }


    return(
        <div>
            <h1>Add Item Page</h1>

            <form onSubmit={handleSubmit}>

                <label>Item Name </label>
                <input type="text" id="name" placeholder="Enter Item Name" value={name}
                       onChange={(e) =>(
                           setName(e.target.value)
                       )}
                />
                <br/>

                <label>Price </label>
                <input type="text" id="price" placeholder="Enter Price" value={price}
                       onChange={ (e) =>(
                           setPrice(e.target.value)
                       )}
                />
                <br/>

                <label>Quantity </label>
                <input type="text" id="quantity" placeholder="Enter Quantity" value={quantity}
                       onChange={(e)=>(
                           setQuantity(e.target.value)
                       )}
                />
                <br/>

                <label>Description </label>
                <input type="text" id="description" placeholder="Enter Quantity" value={description}
                       onChange={(e)=>(
                           setDescrip(e.target.value)
                       )}
                />
                <br/>
                <br/>

                <input type="submit"/>
            </form>

            <br/>
            <br/>
            <Link to={'/traderhome'}>
                <button >Back</button>
            </Link>
        </div>
    )
}