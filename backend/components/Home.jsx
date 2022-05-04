import React from "react";
import {Link} from "react-router-dom";

function Home(){
    return(

        <div>
            <h1>Home Page</h1>
            <Link to='/customer'>
                <button>Customer</button>
            </Link>
            <br/>
            <Link to='/trader'>
                <button>Trader</button>
            </Link>
        </div>
    )
}

export default Home;