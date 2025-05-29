import React from 'react';

import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';



function ProductPage() {
    return(
        <>
        <Hero />
        <LeftSection
        imageUrl='media/images/kite.png'
        productName='kite'
        productDescription='our ultra-fast flagship trading platform with streaming market data,advance charts market data,advanced charts, an alegant UI, and more.Enjoy the Kite experience seamlessly on your Android and IOS devices'
        tryDemo=''
        learnMore=''
        googlePlay=''
        appStore=''
        />
        <RightSection
        imageUrl='media/images/console.png'
        productName='console'
        productDescription='The central dashboard for your Zerodha account. Gaiin insights into your trades and investments with in-depth reports and visualisations.'
        learnMore=''
        />
        <LeftSection
        imageUrl='media/images/coin.png'
        productName='coin'
        productDescription='Buy direct mutual funds online, commission-free, delivered direclty to your DEmat account. Enjoy the investment experience on your Android and IOS devices.'
        tryDemo=''
        learnMore=''
        googlePlay=''
        appStore=''
        />
          <RightSection
        
        imageUrl='media/images/landing.svg'
        productName='Kite connect API'
        productDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIS. if you are a startup, build your investment app and showcase it to our clientbase.'
        learnMore=''
        />
          <LeftSection
        imageUrl='media/images/varsity.png'
        productName='varsity mobile'
        productDescription='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'
        tryDemo=''
        learnMore=''
        googlePlay=''
        appStore=''
        />
        <p className='text-center mt-5 mb-5 fs-4'>
            want to know more about our technology stack? check out the <a href=' ' className="text-decoration-none fs-4 " >Zerodha.tech </a>blog.
        </p>
        <Universe />

        </>

    )
    };

    
       
export default ProductPage;
