import React from 'react';
import  './DishMenu.css';
const DishMenu =({dishData})=> {
  return (

   <>
   <div className="dishWrapper">
    <div className="one">
   {
    dishData.map((curele)=>{
  const{id,name,image,description}=curele;
return(
    <>
<div className="wraperOuter" key={id}>
    <div className="content_image" >
        <img src={image} alt="not found" />
    </div>
 <div className="content_info">
<h1>{name}</h1>
  <p>{description}</p>
    </div>
</div>
    
    </>
);
    })
   }</div>
   </div>
   </>
  );
}

export default DishMenu;