import React from 'react'
import {useStateValue} from './StateProvider'
import '../css/Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { Link } from 'react-router-dom';

function Checkout() {

    const [{basket}] = useStateValue();

    window.onload = function () {
        console.log('aqui');
    }

    return (
        
        <div className="checkout">
            {window.scroll({top: 0, lef:0, behavior: 'smooth'})}
            <div className="checkout__left">
                <a href="https://www.newyorker.com/" target="_blank">
                    <img  className="checkout__ad" src="https://blog.hubspot.com/hubfs/Banner%20Ads%20Explained%20in%20500%20Words%20or%20Less.png" alt=""/>
                </a>
                
                {
                    basket?.length === 0 ? (
                        <div className="checkout__body">
                            <h2 className="checkout__title__empty">Your Shopping Basket is empty</h2>
                            <p className="checkout__message__empty">The price and availability of items at Amazon.com are subject to change. 
                                The Cart is a temporary place to store a list of your items and reflects each item's most recent price.
                            </p>
                        </div>
                    ) : 
                    (
                        <div className="checkout__body"> 
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {
                                basket.map((item)=> (
                                    <CheckoutProduct
                                        id = {item.id}
                                        title = {item.title}
                                        image = {item.image}
                                        price = {item.price}
                                        rating = {item.rating}
                                    ></CheckoutProduct>
                                ))
                                
                            }
                            
                        </div>
                    )
                }
            </div>
            {basket.length>0 && (
                <div className="checkout__right">
                    <Subtotal></Subtotal>
                </div>
            )}
        </div>
        
    )
}

export default Checkout
