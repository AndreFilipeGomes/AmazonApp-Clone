import React from 'react'
import '../css/Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Prime Image"/>
        
            {/* product id, title, proce, rating, image */}
            <div className="home__productRow">
                <Product
                    id="1"
                    title="The Lean Startup: How constant inovation creates radically sucessful businesses paperback"
                    price={11.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61jLpFaAiqL._AC_SL1500_.jpg"
                />
                <Product
                    id="2"
                    title="The Lean Startup: How constant inovation creates radically sucessful businesses paperback"
                    price={11.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61jLpFaAiqL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__productRow">
                <Product
                    id="3"
                    title="The Lean Startup: How constant inovation creates radically sucessful businesses paperback"
                    price={11.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61jLpFaAiqL._AC_SL1500_.jpg"
                />
                <Product
                    id="4"
                    title="The Lean Startup: How constant inovation creates radically sucessful businesses paperback"
                    price={11.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61jLpFaAiqL._AC_SL1500_.jpg"
                />
                <Product
                    id="5"
                    title="The Lean Startup: How constant inovation creates radically sucessful businesses paperback"
                    price={11.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61jLpFaAiqL._AC_SL1500_.jpg"
                />
            </div>


            <div className="home__productRow">
                <Product
                    id="6"
                    title="The Lean Startup: How constant inovation creates radically sucessful businesses paperback"
                    price={11.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61jLpFaAiqL._AC_SL1500_.jpg"
                />
             
            </div>

        </div>
    )
}

export default Home
