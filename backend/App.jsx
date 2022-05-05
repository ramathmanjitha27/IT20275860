import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Item from './components/Item'
import Customer from "./components/Customer";
import Trader from "./components/Trader";
import ViewItem from "./components/ViewItem";
import TraderHome from "./components/TraderHome";
import AddItem from "./components/AddItem";
import ViewInventory from "./components/ViewInventory";
import ViewInventItem from "./components/ViewInventItem";
import AddPromotion from "./components/AddPromotion";
import ViewPromotion from "./components/ViewPromotion";
import ViewCustomers from "./components/ViewCustomers";


function App() {

        return(
            <div>
                <BrowserRouter>
                        <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/item" element = {<Item/>}/>
                                <Route path="/customer" element = {<Customer/>}/>
                                <Route path="/trader" element={<Trader/>}/>
                                <Route path="/viewitem/:id" element={<ViewItem/>}/>
                                <Route path="/traderhome" element={<TraderHome/>}/>
                                <Route path="/additem" element={<AddItem/>}/>
                                <Route path="/inventory" element={<ViewInventory/>}/>
                                <Route path="/ViewInventItem/:id" element={<ViewInventItem/>}/>
                                <Route path="/add-promotion" element={<AddPromotion/>}/>
                                <Route path="/viewpromotion" element={<ViewPromotion/>}/>
                                <Route path="/viewCustomer" element={<ViewCustomers/>}/>
                        </Routes>
                </BrowserRouter>
        </div>
        );
}

export default App;