import React from 'react';
import './Partner.css';
const Partner = ({ partnerData }) => {
  return (
    <>

      {
        partnerData.map((curelem) => {
          // const[id,name,post,image,description]=curelem;

          return (<>
            <div className="p_div">
              <div className="image_div">
                <img src={curelem.image} alt=" image not found" /></div>
              <div className="content">
                <h4>{curelem.name}</h4>
                <h6>{curelem.post}</h6>
                <p>
                  {curelem.description}
                </p></div>
            </div>
          </>)
        })
      }



    </>

  )
}


export default Partner;