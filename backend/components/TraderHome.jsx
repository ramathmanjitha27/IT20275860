import React from "react";
import {Link} from "react-router-dom";

export default function TraderHome(){
    return(
        <div>
            <h1>Trader Home Page</h1>
            <Link to={'/additem'}>
                <button>Add Item</button>
            </Link>
            <br/>
            <br/>

            <Link to={'/inventory'}>
                <button>View Inventory</button>
            </Link>
            <br/>
            <br/>

            <Link to={'/viewCustomer'}>
            <button>View Customers</button>
            </Link>
            <br/>
            <br/>

            <Link to={'/add-promotion'}>
                <button>Add promotion</button>
            </Link>
            <br/>
            <br/>

            <Link to={'/viewpromotion'}>
                <button>View promotion</button>
            </Link>
            <br/>
            <br/>

                <br/>
                <br/>

                <label>Quick Link to Customer Page   </label>
                <Link to={'/customer'}>
                    <button>Customer Page</button>
                </Link>


        </div>
    )
}