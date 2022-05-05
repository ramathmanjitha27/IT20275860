import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default function ViewCart(){

    const [CartLists, setViewCart] = useState([]);

    useEffect(() =>{
        function getViewCart(){
            axios.get("http://localhost:3001/cart").then((res) => {
                console.log(res.data);
                setViewCart(res.data);
            }).catch( (err) => {
                alert(err.message);
            })
        }
        getViewCart();
    }, [])
    return(
        <div>
            <h1>View Cart</h1>

            <table>
                <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                </tr>
                </thead>
                <tbody>
                {CartLists.map((CartList)=>{

                    return (
                        <tr>
                            <td>{CartList.name}</td>
                            <td>{CartList.price}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

            <Link to={'/item'}>
                <button >Back</button>
            </Link>
        </div>
    )
}