import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className = "home">
            <img className = "home__image" 
                src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt = "" 
            />
            
            {/* products id , title, price, rating, image */}
            <div className = "home__row">
                <Product
                    id = "1232134544"
                    title = "AmazonBasics Gaming Headset - Black And Blue"
                    price = {270.00}
                    rating = {3}
                    image = "https://m.media-amazon.com/images/I/71lVo9Y3nnL._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product
                    id = "123214548"
                    title = "2020-2021 Season Men's Away Soccer Jersey/Short Colour Black"
                    price = {125.00}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/61chAnIVeoL._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>

            <div className = "home__row">
                <Product
                    id = "123215454"
                    title = "Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 inch Full HD IPS Display, 8GB DDR4, 256GB NVMe SSD, Wi-Fi"
                    price = {2500.00}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/71s1LRpaprL._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product
                    id = "123213454"
                    title = "New Apple iPhone 12 Pro Max (128GB, Pacific Blue) [Locked] + Carrier Subscription"
                    price = {1750.00}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UL480_FMwebp_QL65_.jpg"
                />
                <Product
                    id = "12321341"
                    title = "Samsung Galaxy S20 Ultra 5G (SM-G9880), 12GB RAM / 256GB Storage, (GSM ONLY, NO CDMA) Factory Unlocked International Version No-Warranty Cell Phone (Cosmic Gray)"
                    price = {1600.00}
                    rating = {4}
                    image = "https://m.media-amazon.com/images/I/51xLgtCO0ML._AC_UY327_FMwebp_QL65_.jpg"
                />
            </div>

            <div className = "home__row">
                <Product
                    id = "12321345"
                    title = "Sony XBR55X900F 55-Inch 4K Ultra HD Smart LED Android TV with Alexa Compatibility - 2018 Model"
                    price = {1250.00}
                    rating = {4}
                    image = "https://m.media-amazon.com/images/I/71uqLWUl2GL._AC_UY327_FMwebp_QL65_.jpg"
                />
            </div>
            {/* we are gonna render bunch of products */}
        </div>
    )
}

export default Home;
