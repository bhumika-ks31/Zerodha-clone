import React from 'react';

function Education() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' alt='education' />
                </div>
                <div className='col-6'>
                    <h1 className='mb-3 p-3 fs-2'>Free and open market education</h1>
                    <p>
                        Varsity, the largest online stock market education book in the world
                        <br />
                        covering everything from basics to advanced trading
                    </p>
                    <a href=" " className="btn btn-link text-decoration-none fs-5">
                        Versity <i className="fas fa-long-arrow-alt-right ms-2"></i>
                    </a>
                    <p>
                        TradingQ&A, the most active trading and investment community in India for all your market-related queries
                    </p>
                    <a href=" " className="btn btn-link text-decoration-none fs-5 mt-5">
                        TradingQ&A <i className="fas fa-long-arrow-alt-right ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;
