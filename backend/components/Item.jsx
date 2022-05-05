import React from "react";
import {useEffect,useState} from "react";
import axios from "axios";





export default function Item(){

    const [items, setItems] = useState([]);

    useEffect(() =>{
        function getItems(){
            axios.get("http://localhost:3001/item").then((res) => {
                console.log(res.data);
                setItems(res.data);
            }).catch( (err) => {
                alert(err.message);
            })
        }
        getItems();
    }, [])

    return(
        <div>
            <h2>Item Page</h2>
            <table>
                <thead>
                <tr>
                    <th>Item name</th>
                    <th>price</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>


    )
}