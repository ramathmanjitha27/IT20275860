import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ViewWishList(){

    const [wishLists, setViewWish] = useState([]);

    useEffect(() =>{
        function getViewWish(){
            axios.get("http://localhost:3001/wish").then((res) => {
                console.log(res.data);
                setViewWish(res.data);
            }).catch( (err) => {
                alert(err.message);
            })
        }
        getViewWish();
    }, [])

    return(
        <div>
            <h1>View Wish-List</h1>
            <table>
                <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                </tr>
                </thead>
                <tbody>
                {wishLists.map((wishList)=>{

                    return (
                        <tr>
                            <td>{wishList.name}</td>
                            <td>{wishList.price}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <br/>
            <br/>

            <Link to={'/item'}>
                <button >Back</button>
            </Link>
        </div>
    )
}