import React from 'react';
import './About.css';
import img from '../images/table.jpg'
import partnerData from './partnerapi';
import Partner from './Partner';
import Footer from './Footer';
const About = () => {
  return (
    <div className='about_wraper'>
      <div className="about_section_wraper">
        <div className="about_info">
          <h1>Philoxenia — φιλοξενια</h1>
          <div className="lines"></div>

          <p>
            At Kokkari Estiatorio, we are driven by the concept of philoxenia, the art of making a stranger a friend. This philosophy drives our efforts to create a cuisine fit for the gods with the hospitality of a proper Greek home — a restaurant that you would never want to leave.

            Named after a small fishing village on the island of Samos in the Aegean Sea, Kokkari is the sister restaurant to acclaimed Evvia Estiatorio in Palo Alto, California.

            Legendary Kokkari is the site where Orion, son of the Greek god Poseidon, fell in love with the daughter of the King of Chios. For her love, Orion foraged the island for wild game and seafood to prepare elaborate banquets: Cuisine fit for the gods.

            On entering Kokkari, guests experience the old-world charm of a rustic Mediterranean country inn. An inviting fireplace, extensive woodwork, hand-made pottery and freshly picked flowers all reflect the warmth and tradition of ages-old hospitality.!</p>
          <br></br>
          <br></br>
          <br></br>
        </div>

        <div className="about_image_wrapper">
          <img src={img} alt="not found"></img>
        </div>

      </div>
      <div className="partner_wrapper">
        <div className="details">
          <div className="info_about">
            <h2>KOKKARI ESTIATORIO</h2>
            <h5>200 Jackson Street (at Front St.)</h5>
            <h5>San Francisco, CA 94111</h5>
            <h5>
              p: 415.981.0983
            </h5><h5>
              fx: 415.982.0983</h5>

            reservations & hours
            <p>
              directions via mobile map</p></div>
          <div className="more_info">
           <h5>Managing Partner</h5> 	Paul Kirbybr <br />
           <h5></h5> Chef/Partner	Erik Cosselmon <br />
           <h5> General</h5>  Manager	William Boumier <br />
           <h5>  Chef </h5>  de Cuisine	Manuel Vera <br />
           <h5>  Office</h5> Manager	Molly Barrango <br />
           <h5>Sous Chefs	</h5>  Brian Beach <br />
           <h5> Miho</h5>  Reis <br />
           <h5>Yaya</h5>   Isibor <br />
           <h5>Pastry	</h5>   Guillermo Coronado <br />
           <h5> Managers</h5> 	Bibi Bahador bf <br />
           <h5> Iain </h5>  Bates <br />
           <h5>Michele </h5>  DiRuocco <br />
           <h5>Robin</h5>   Kirby <br />
           <h5>  Valerie </h5>Klein <br />
           <h5>Wine </h5>  Buyer	Lyle Coffield <br />
           <h5> Event</h5>  Manager	Melissa Lopez</div>
        </div>
        <div className="partner_info"><Partner partnerData={partnerData} /></div>
      </div>
    <Footer></Footer>

    </div>
  )
}

export default About;