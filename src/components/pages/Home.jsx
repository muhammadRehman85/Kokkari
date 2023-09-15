import React from 'react';
import './Home.css';
import Footer from './Footer';
import showcase_image from '../images/hearth2.jpg';
function Home() {
  return (
    <div className='home_wraper'>
        <div className="introContent"><h1>OPEN FOR INDOOR DINING</h1>
        <br></br></div>
        <p> PLEASE CALL AT <span>12479207024070</span>  for reservation<br></br>     OR ONLINE AT <span>OPENTABE</span></p>
        <br></br>
        <p>DELIVERY AVAILABE VIA </p>
        <p> <span>DASHEATS,FOODPANDA </span>AND <span>FOODGRABE</span></p>
        <div className="introImage"><img src={showcase_image} alt="show case image not found"></img></div>
        <div className="introContent two">
            <p>----------PLEASE SEE OUR PUBLISHED.........</p>
        <p><span>-------HEALTH AND SAFTEY PROTOCOLS-------</span></p>
            ------AND BE AWARE OF LOCAL GUIDLINES------
        <p>--- --RELATED TO INDOOR DINNING AT RESTURANT-----</p><br/>
        <p> KALI OREX!!</p></div>
 <Footer/>
        {/* <div className="introContent">
          <div className="contact"><ul><li>PASS ROOM</li><li>GIFT CERTIFICATES AND COOKBOOK</li><li>CONTACT</li></ul></div>
        </div>
        <div className="introContent three"> <p>  kokkari |EVVIA</p>
        <p><span>KOKKARI ESTIARTORIO</span></p>
           <p> 200 JACSON STREET ( ATFRONT ST )</p>
       
        <p>SAN FRANCISCO CA .94111</p>
        <p> P:847.4834737.8738 Fx:744.6738.337</p>
        <br/> 
        <p> <span>RESERVATION AND HOURS<br/> DIRECTIONS</span></p>

        <br/></div>
       
<div className="footer"><div className="copy"> copyright 2022 |KOKKARI</div>
<div className="devlopby">Develop By Netloop limited</div>


</div>
         */}

    </div>
  )
}

export default Home;