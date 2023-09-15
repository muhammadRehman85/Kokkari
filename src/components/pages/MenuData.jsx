import React from 'react';
import './menuCard.css';
const MenuData=({menuData})=> {
    return ( <>
    { menuData.map((curelement)=>{
  const{id,name,image,category,price,description}=curelement;

        return(
<> 
           <div className="flex_wrapper">
        <div className="wrapper" key={id}>
          <div className="menu_about">
            <div className="info">
                <h1>{name}</h1>
                <hr></hr>
                <hr/>
            <br></br>
                <h5 className='cat'>{category}</h5>
                <br></br>
                <p className='description'>{description}
                </p>
             
            
            </div>
          </div>
          <div className="menu_image">
            <img  className='images_wraper' alt="not found" src={image}></img>
          </div>
        </div>
      </div></> 
        )
        })
}
   
    
    
    </> );
}

export default  MenuData;