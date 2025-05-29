import React from 'react';

function Universe() {
    return (
        <div className='container mt-5'>
            <div className='text-center mb-4'>
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our partner platforms
                </p>
            </div>

            <div className='row mt-5 p-5'>
                {/* 1st card */}
                <div className='col-md-4 mb-5 text-center fs-6'>
                    <img src='/media/images/zerodhafundhouse (1).png' alt="Zerodha Fundhouse" className='img-fluid mb-2' style={{ height: '50px' }} />
                    <p className='text-muted'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>

                {/* 2nd card */}
                <div className='col-md-4 mb-5 text-center fs-6'>
                    <img src='/media/images/sensibullLogo.svg' alt="Sensibull" className='img-fluid mb-2' style={{ height: '50px' }} />
                    <p className='text-muted'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>

                {/* 3rd card */}
                <div className='col-md-4 mb-5 text-center fs-6'>
                    <img src='/media/images/tijori.svg' alt="Tijori" className='img-fluid mb-2' style={{ height: '50px' }} />
                    <p className='text-muted'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>

                {/* 4th card */}
                <div className='col-md-4 mb-5 text-center fs-6'>
                    <img src='/media/images/streak-logo.png' alt="Streak" className='img-fluid mb-2' style={{ height: '50px' }} />
                    <p className='text-muted'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>

                {/* 5th card */}
                <div className='col-md-4 mb-5 text-center fs-6'>
                    <img src='/media/images/smallcaseLogo.png' alt="Smallcase" className='img-fluid mb-2' style={{ height: '50px' }} />
                    <p className='text-muted'>Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.</p>
                </div>

                {/* 6th card */}
                <div className='col-md-4 mb-5 text-center fs-6'>
                    <img src='/media/images/ditto-logo.png' alt="Ditto" className='img-fluid mb-2' style={{ height: '50px' }} />
                    <p className='text-muted'>Personalized advice on life and health insurance. No spam and no mis-selling. Sign up for free.</p>
                </div>
            </div>

            <div className='text-center mt-4 fs-6'>
                <button className='btn btn-primary px-4 py-2 fs-5'>Signup Now</button>
            </div>
        </div>
    );
}

export default Universe;
