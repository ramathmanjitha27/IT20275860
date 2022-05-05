import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ViewCustomers(){

    const [customers, setCus] = useState([]);

    useEffect(() =>{
        function getCus(){
            axios.get("http://localhost:3001/customer").then((res) => {
                console.log(res.data);
                setCus(res.data);
            }).catch( (err) => {
                alert(err.message);
            })
        }
        getCus();
    }, [])

    return(
        <div>
            <h1>View Customers</h1>

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer)=>{

                    return (
                        <tr>
                            <td>{customer.cusName}</td>
                            <td>{customer.cusEmail}</td>
                            <td>{customer.cusAddres}</td>
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