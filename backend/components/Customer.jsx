import React from "react"
import { useState } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";

export default function Customer(){

    const [cusName, setCusName] = useState("");
    const [cusEmail, setCusEmail] = useState("");
    const [cusAddres, setCusAdr] = useState("");



    const handleSubmit = (event) => {
        const newCustomer = {
            cusName,
            cusEmail,
            cusAddres
        }

        axios.post('http://localhost:3001/customer', newCustomer).then(()=>{
            window.location.href = "/item";

        }).catch((err)=>{
            alert(err)
        })


    }


    return(
        <div>
            <h1>Welcome to customer page</h1>
            <h2>Register Customer</h2>
            <form onSubmit={handleSubmit}>

                <label>Name </label>
                <input type="text" id="cusName" placeholder="Enter Name" value={cusName}
                    onChange={(e) =>(
                        setCusName(e.target.value)
                    )}
                />
                <br/>

                <label>Email </label>
                <input type="text" id="cusEmail" placeholder="Enter Email" value={cusEmail}
                    onChange={ (e) =>(
                        setCusEmail(e.target.value)
                    )}
                />
                <br/>

                <label>Address </label>
                <input type="text" id="cusAddres" placeholder="Enter Address" value={cusAddres}
                    onChange={(e)=>(
                        setCusAdr(e.target.value)
                    )}
                />
                <br/>
                <br/>

                <input type="submit"/>
            </form>

            <br/>
            <br/>
            <label>Nevigate to Customer Main Page : </label>
            <Link to={'/item'}>
                <button>Customer Main Page</button>
            </Link>
        </div>
    )
}