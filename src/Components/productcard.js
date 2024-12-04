import React from 'react';
import './productcard.css';


function Productcard(prop) {
    const { image, title, description, price}= prop;
  return (
    <div className="productcard">
      
      < img src= "81lMScOZ8zL.jpg" className='imageD'/>
      <p>Title=  {title}</p>
      <p>Description= {description}</p>
      <p>Price= {price}</p>
    
    </div>
  );
}

export default Productcard;