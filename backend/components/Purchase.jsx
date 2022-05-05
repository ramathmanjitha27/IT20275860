import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default function Purchase(){

    const [PurchaseLists, setPurchase] = useState([]);

    useEffect(() =>{
        function getPurchase(){
            axios.get("http://localhost:3001/purchase").then((res) => {
                console.log(res.data);
                setPurchase(res.data);
            }).catch( (err) => {
                alert(err.message);
            })
        }
        getPurchase();
    }, [])

    return(
        <div>
            <h1>Purchase History</h1>
            <br/>
            <table>
                <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {PurchaseLists.map((PurchaseList)=>{

                    return (
                        <tr>
                            <td>{PurchaseList.name}</td>
                            <td>{PurchaseList.price}</td>
                            <td>{PurchaseList.description}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

            <br/>
            <Link to={'/item'}>
                <button>Back</button>
            </Link>
        </div>
    )
}