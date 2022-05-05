import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Trader(){

    const [trName, setTrName] = useState("");
    const [trEmail, setTrEmail] = useState("");
    const [trAddres, setTrAdr] = useState("");



    const handleSubmit = (event) => {
        const newTrader = {
            trName,
            trEmail,
            trAddres
        }

        axios.post('http://localhost:3001/trader', newTrader).then(()=>{
            alert(`The name ${trName} ${trEmail} ${trAddres}`)
            window.location.href = "/traderhome";

        }).catch((err)=>{
            alert(err)
        })


    }


    return(
        <div>
            <h1>Welcome to Trader Page</h1>

            <form onSubmit={handleSubmit}>

                <label>Name </label>
                <input type="text" id="trName" placeholder="Enter Name" value={trName}
                       onChange={(e) =>(
                           setTrName(e.target.value)
                       )}
                />
                <br/>

                <label>Email </label>
                <input type="text" id="trEmail" placeholder="Enter Email" value={trEmail}
                       onChange={ (e) =>(
                           setTrEmail(e.target.value)
                       )}
                />
                <br/>

                <label>Address </label>
                <input type="text" id="trAddress" placeholder="Enter Address" value={trAddres}
                       onChange={(e)=>(
                           setTrAdr(e.target.value)
                       )}
                />
                <br/>
                <br/>

                <input type="submit"/>
            </form>
            <br/>
            <br/>
            <label>nevigate to Trader Main Page  </label>
            <Link to={'/traderhome'}>
                <button>Trader Main Page</button>
            </Link>
        </div>
    )
}