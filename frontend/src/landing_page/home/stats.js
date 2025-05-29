import React from 'react';

function Stats() {
    return (
        <div className="container mt-5 p-3">
            <div className="row align-items-center p-5">
                {/* Left Content */}
                <div className="col-6 p-5">
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>

                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='text-muted'>
                        That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.
                    </p>
                    
                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>
                        No gimmicks, spam, gamification, or annoying push notifications. High-quality apps that you use at your pace, the way you like.
                    </p>
                    
                    <h3 className='fs-4'>The Zerodha universe</h3>
                    <p className='text-muted'>
                        Not just an app, but a whole ecosystem. Our investments in ₹30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                    
                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='text-muted'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions but actively help you do better with your money.
                    </p>
                </div>

                {/* Right Image + Links */}
                <div className="col-md-6 text-center">
                    <img 
                        src="media/images/ecosystem.png" 
                        alt="stats" 
                        style={{ width: "90%" }} 
                        className="img-fluid mb-4"
                    />

                    <div>
                        <a href=" " className="btn btn-link text-decoration-none fs-5 me-3">
                            Explore our products <i className="fas fa-long-arrow-alt-right ms-2"></i>
                        </a>
                        <a href=" " className="btn btn-link text-decoration-none fs-5">
                            Try Kite demo <i className="fas fa-long-arrow-alt-right ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
