import React from 'react'
import img from '../images/door.jpg';
import Footer from './Footer';
import './Reservation.css'
function Reservation() {
  return (
    <>
    <div className="out_wrapper">
    <div className="reservataion_wrapper">
      <div className="reservation_info">
       <h1> Reservations</h1>
       <hr />
       <hr />
KOKKARI ESTIATORIO accepts reservations up to <span >two months in advance </span>to the calendar date.

To reserve a table, please call <span>415.981.0983.</span> 

Online reservations are 30 days in advance only.
<span> Make an online reservation through OpenTable</span> <br />


We do not take reservations via email.
<h2> Hours of Operation</h2>

<h3>lunch</h3>
Mon-Fri 11:30am to 2:30pm

<h3>Dinner</h3>
Mon-Thu 5:00pm – 10:00pm <br />
Fri 5:00pm – 11:00pm <br />
Sat 5:00pm – 11:00pm <br />
Sun 5:00pm – 10:00pm <br />

<h3>Corkage</h3>
$30 per 750ml bottle for up to 2 bottles, $50 per additional bottle
      </div>
      <div className="reservation_image"><img src={img} alt="not found" /></div>

      {/* google map */}
      
    </div>
    <div className="google_map">jjgoogle map</div>
      <div className="line"></div>
      <div className="address">
     <h3>From North Bay:</h3> 
     <ul>
<li>Take US-101 South towards San Francisco</li>
<li>Go across the Golden Gate Bridge</li>

<li>Take the US-101 South ramp towards DOWNTOWN/LOMBARD ST.</li>
<li>Stay on LOMBARD ST. until VAN NESS AVE</li>
<li>Turn RIGHT on VAN NESS AVE.</li>
<li>Turn LEFT on BROADWAY ST.</li>
<li>Take BROADWAY thru the BROADWAY TUNNEL.</li>
<li>Proceed thru the major intersection of COLUMBUS and BROADWAY.</li>
<li>Turn RIGHT on BATTERY ST.</li>
<li>Turn LEFT on JACKSON ST.</li>
<li>KOKKARI is at the corner of JACKSON ST. & FRONT ST.</li></ul>
<h3>From Sout Bay:</h3> 
     <ul>
<li>Take US-101 South towards San Francisco</li>
<li>Go across the Golden Gate Bridge</li>

<li>Take the US-101 South ramp towards DOWNTOWN/LOMBARD ST.</li>
<li>Stay on LOMBARD ST. until VAN NESS AVE</li>
<li>Turn RIGHT on VAN NESS AVE.</li>
<li>Turn LEFT on BROADWAY ST.</li>
<li>Take BROADWAY thru the BROADWAY TUNNEL.</li>
<li>Proceed thru the major intersection of COLUMBUS and BROADWAY.</li>
<li>Turn RIGHT on BATTERY ST.</li>
<li>Turn LEFT on JACKSON ST.</li>
<li>KOKKARI is at the corner of JACKSON ST. & FRONT ST.</li></ul>
<h3>From West Bay:</h3> 
     <ul>
<li>Take US-101 South towards San Francisco</li>
<li>Go across the Golden Gate Bridge</li>

<li>Take the US-101 South ramp towards DOWNTOWN/LOMBARD ST.</li>
<li>Stay on LOMBARD ST. until VAN NESS AVE</li>
<li>Turn RIGHT on VAN NESS AVE.</li>
<li>Turn LEFT on BROADWAY ST.</li>
<li>Take BROADWAY thru the BROADWAY TUNNEL.</li>
<li>Proceed thru the major intersection of COLUMBUS and BROADWAY.</li>
<li>Turn RIGHT on BATTERY ST.</li>
<li>Turn LEFT on JACKSON ST.</li>
<li>KOKKARI is at the corner of JACKSON ST. & FRONT ST.</li></ul>
<h3>From East Bay:</h3> 
     <ul>
<li>Take US-101 South towards San Francisco</li>
<li>Go across the Golden Gate Bridge</li>

<li>Take the US-101 South ramp towards DOWNTOWN/LOMBARD ST.</li>
<li>Stay on LOMBARD ST. until VAN NESS AVE</li>
<li>Turn RIGHT on VAN NESS AVE.</li>
<li>Turn LEFT on BROADWAY ST.</li>
<li>Take BROADWAY thru the BROADWAY TUNNEL.</li>
<li>Proceed thru the major intersection of COLUMBUS and BROADWAY.</li>
<li>Turn RIGHT on BATTERY ST.</li>
<li>Turn LEFT on JACKSON ST.</li>
<li>KOKKARI is at the corner of JACKSON ST. & FRONT ST.</li></ul>
      </div>
      <Footer/>
      </div>
    </>
  )
}
  
export default Reservation;