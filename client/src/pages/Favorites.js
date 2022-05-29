import React from 'react'
import {QUERY_USER} from '../utils/queries'
import { useQuery } from "@apollo/client";
import ProductItem from '../components/ProductItem';
import Cart from "../components/Cart";


function Favorites () {
    const {data, loading} = useQuery(QUERY_USER)
    const userData = data?.user || {}
    console.log (userData)

    if (loading){
        return (
            <div>
                <h1>LOADING...</h1>
            </div>
    
        )
    }
    return (
        <div>
            <h1>{userData.firstName}'s Favorites</h1>
            {userData.favorites.map(product=>(
            <ProductItem
            key={product._id}
            _id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
        <Cart />
        </div>
    )
}

export default Favorites