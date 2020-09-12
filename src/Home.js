import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
         <div className="home__container">
             <img
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
             />
             <div className="home__row">
                 <Product
                 id="12321341" 
                 title='The lean startup: How Constant Innovation Creates
                 Radically Succesful Businesses' 
                 price={11.96}
                 image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                 rating={5}/>
                 <Product
                 id="49583084" 
                 title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with 
                 K-beater, Dough Hook and Whisk, 5 litre Glass Bowl' 
                 price={239.0}
                 image="https://i8.amplience.net/i/arnotts/BRISKMX750AR_ar_01?$detail_main_ar$"
                 rating={4}/>
             </div>

             <div className="home__row">
                <Product
                 id="4902850" 
                 title='Apple Watch Series 3 (GPS, 38mm) - Silver Aluminum Case with White Sport Band' 
                 price={359.99}
                 image="https://images-na.ssl-images-amazon.com/images/I/71vCuRn4CkL._AC_SL1500_.jpg"
                 rating={5}/>
                <Product
                 id="23469726" 
                 title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric' 
                 price={98.99}
                 image="https://www.bhphotovideo.com/images/images2500x2500/amazon_b0794w1skp_echo_plus_2nd_generation_1437070.jpg"
                 rating={4}/>
                <Product
                 id="3254569855" 
                 title='The New Apple iPad Pro (12.9-inch, Wi-fi, 128GB) -
                 Silver (4th Generation)' 
                 price={50.99}
                 image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SX342_.jpg"
                 rating={5}/>
             </div>

             <div className="home__row">
                <Product
                 id="4902850" 
                 title='Samsung LC49RG90SSUXEN 49 Curved
                 Led Gaming Monitor' 
                 price={199.99}
                 image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
                 rating={3}/>
             </div>
             </div> 
        </div>
    )
}

export default Home
