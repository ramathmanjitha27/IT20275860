import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default function ViewInventory(){

    const [inventItems, setInvent] = useState([]);

    useEffect(() =>{
        function getItems(){
            axios.get("http://localhost:3001/item").then((res) => {
                console.log(res.data);
                setInvent(res.data);
            }).catch( (err) => {
                alert(err.message);
            })
        }
        getItems();
    }, [])

    return(
        <div>
            <h1>Inventory</h1>

            <table>
                <thead>
                <tr>
                    <th>Item name</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>Actions</th>


                </tr>
                </thead>
                <tbody>
                {inventItems.map((invetItem)=>{

                    const passInventItem = (invetItem) =>{
                        let {id, name, price, description, quantity} = invetItem;
                        console.log(id);
                        localStorage.setItem('id',id)
                        localStorage.setItem('name',name)
                        localStorage.setItem('price',price)
                        localStorage.setItem('quantity',quantity)
                        localStorage.setItem('description',description)
                    }

                    return (
                        <tr>
                            <td>{invetItem.name}</td>
                            <td>{invetItem.price}</td>
                            <td>{invetItem.quantity}</td>
                            <td>{invetItem.description}</td>
                            <td>
                                <Link to={'/ViewInventItem/'+invetItem.id}>
                                    <button onClick={()=> passInventItem(invetItem)}>Edit Item</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

            <br/>
            <br/>
            <Link to={'/traderhome'}>
                <button >Back</button>
            </Link>
        </div>
    )
}