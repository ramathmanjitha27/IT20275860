import React from "react";
import {useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";





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
            <h1>Item Page</h1>
            <br/>
                <Link to={'/viewCart'}>
                    <button>view Cart</button>
                </Link>

               <br/>
                <br/>

                <Link to={'/viewWish-List'}>
                    <button>view Wish List</button>
                </Link>

            <br/>
            <br/>

            <Link to={'/purchase'}>
                <button>Purchase History</button>
            </Link>
            <br/>
            <br/>
            <table>
                <thead>
                <tr>
                    <th>Item name</th>
                    <th>price       </th>
                    <th>Quantity</th>
                    <th>Actions</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {items.map((item)=>{

                    const passItem = (item) =>{
                        let {id, name, price, description, quantity} = item;
                        console.log(id);
                        localStorage.setItem('id',id)
                        localStorage.setItem('name',name)
                        localStorage.setItem('price',price)
                        localStorage.setItem('quantity',quantity)
                        localStorage.setItem('description',description)
                    }

                    const addWish = (item) =>{
                        let {id, name, price, description, quantity} = item;
                        const newWish = {
                            id,
                            name,
                            price,
                            description,
                            quantity
                        }

                            axios.post('http://localhost:3001/wish', newWish).then(()=>{
                                alert(`Added to the Wishlist`)
                            }).catch((err)=>{
                                alert(err)
                            })
                        }

                    const addcart = (item) =>{
                        let {id, name, price, description, quantity} = item;
                        const newCart = {
                            id,
                            name,
                            price,
                            description,
                            quantity
                        }

                        axios.post('http://localhost:3001/cart', newCart).then(()=>{
                            alert(`Added to the Cart`)
                        }).catch((err)=>{
                            alert(err)
                        })
                    }

                    const addpurchase = (item) =>{
                        let {id, name, price, description, quantity} = item;
                        const newPurchase = {
                            id,
                            name,
                            price,
                            description,
                            quantity
                        }

                        axios.post('http://localhost:3001/purchase', newPurchase).then(()=>{
                            alert(`Purchased Successfully...`)
                        }).catch((err)=>{
                            alert(err)
                        })
                    }


                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <Link to={'/viewitem/'+item.id}>
                                    <button onClick={()=>passItem(item)}>View Item</button>
                                </Link>
                            </td>
                            <td>

                                <button onClick={()=>addWish(item)}>Add to wish list</button>
                            </td>
                            <td>
                                <button onClick={()=>addcart(item)}>Add to Cart</button>
                            </td>

                            <td>
                                <button onClick={()=>addpurchase(item)}>purchase</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

            <br/>
            <br/>

            <center>
                <label>Quick Link to Trader Page   </label>
                <Link to={'/trader'}>
                    <button>Trader Page</button>
                </Link>
            </center>
        </div>


    )
}