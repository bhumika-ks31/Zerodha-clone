import React from 'react';

function LeftSection({imageUrl, productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (
       <div className='container'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img src={imageUrl} alt="" />'
            </div>
             <div className='col-6 p-5 mt-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                <a href={tryDemo} >tryDemo <i className="fas fa-long-arrow-alt-right ms-2"></i></a>
                <a href={learnMore}style={{ marginLeft: "50px"}}>learnMore<i className="fas fa-long-arrow-alt-right ms-2"></i></a>
                </div>
                <div className='mt-3'>
                <a href={googlePlay}><img src='media/images/googlePlayBadge.svg '  alt='' s /></a>
                <a href={appStore}style={{ marginLeft: "50px"}} ><img src='media/images/appStoreBadge.svg '   alt=''  /></a>
                </div>
                
             </div>
        </div>

       </div>
     );
}
export  default LeftSection;