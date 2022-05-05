import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ViewPromotion(){

    const [promotions, setPromo] = useState([]);

    useEffect(() =>{
        function getPromot(){
            axios.get("http://localhost:3001/promotion").then((res) => {
                console.log(res.data);
                setPromo(res.data);
            }).catch( (err) => {
                alert(err.message);
            })
        }
        getPromot();
    }, [])


    return(
        <div>
            <h1>View Promotion</h1>

            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Discount</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {promotions.map((promotion)=>{

                    return (
                        <tr>
                            <td>{promotion.Title}</td>
                            <td>{promotion.discount}</td>
                            <td>{promotion.description}</td>
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