import React from 'react';

function RightSection({imageUrl, productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
       <div classname='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5 mt-5'>
              <h1>{productName}</h1>
              <p>{productDescription}</p>
               <div><a href={learnMore}>Learn More</a></div>
                </div>
               <div className='col-6'>
                 <img src={imageUrl} alt=" " />
               </div>
        </div>
       </div>
     );
}

export default RightSection;