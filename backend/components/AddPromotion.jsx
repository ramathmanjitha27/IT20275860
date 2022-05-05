import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function AddPromotion(){

    const [Title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [discount, setDiscount] = useState("");

    const handleSubmit = (event) => {
        const newPromotion = {
            Title,
            description,
            discount
        }

        axios.post('http://localhost:3001/promotion', newPromotion).then(()=>{
            alert(`The new promotion added `)
            window.location.href = "/traderhome";
        }).catch((err)=>{
            alert(err)
        })
    }

    return (
        <div>
            <h1>Add Promotion Page</h1>

            <form onSubmit={handleSubmit}>

                <label> Title </label>
                <input type="text" id="Title" placeholder="Enter Title"
                       onChange={(e) =>(
                           setTitle(e.target.value)
                       )}
                />
                <br/>

                <label>Discount </label>
                <input type="text" id="discount" placeholder="Enter Discount"
                       onChange={ (e) =>(
                           setDiscount(e.target.value)
                       )}
                />
                <br/>

                <label>Description </label>
                <input type="text" id="description" placeholder="Enter Quantity"
                       onChange={(e)=>(
                           setDescription(e.target.value)
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