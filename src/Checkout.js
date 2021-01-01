import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className = "checkout">
            <div className = "checkout__left">
                <img className = "checkout__ad" src = "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt = "adimage" />
            
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty.</h2>
                        <p>You have no items in your basket. To buy one or more items, click "Add to Basket" next to the item.</p>
                    </div>
                ) : (
                    <div className = "checkout__title">
                        <h2 style={{borderBottom:"1px solid lightgray"}}>Your Shopping Basket</h2>
                        {/* List out all the checkout Products */}
                        {basket?.map(item => (
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className = "checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;

