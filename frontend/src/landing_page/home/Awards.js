import React from 'react';

function Awards() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                {/* Left side: Image */}
                <div className="col-md-6 text-center">
                    <img 
                        src="media/images/largestBroker.svg" 
                        alt="award" 
                        className="img-fluid"
                    />
                </div>

                {/* Right side: Text */}
                <div className="col-md-6">
                    <h1 className="mb-3">Largest Stock Broker in India</h1>
                    <p>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes 
                        in India daily by trading and investing in it.
                    </p>

                    <div className="row mt-4">
                        <div className="col-sm-6">
                            <ul>
                                <li>Futures and options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency and derivatives</li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <ul>
                                <li>Stocks & IPO</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and govt. securities</li>
                            </ul>
                        </div>
                    </div>

                    {/* Press Logos at the bottom */}
                    <div className="mt-4">
                        <img 
                            src="media/images/pressLogos.png" 
                            alt="press logos" 
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
