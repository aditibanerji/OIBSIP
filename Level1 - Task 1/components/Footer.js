import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'


import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebook); 


const Footer = () => {
  return (
    <div className='f'>

        <div className='upper'>
                
                <div className='upper-heading'>
                     <h1>Unique Autos Service</h1>
                     <button className='upper-btn'>Book Inspection</button>

                </div>
    
        </div>

        <div className='lower'>

             <div className='left-content'>

                <div className='left-heading'>
                  <h2>Unique Autos</h2>
                </div>
                <div className='left-p'>
                  <p>Successfull buisnesses know the <br/>importance of building and <br/>maintaining good working<br/> relationships.</p>
                </div>
                <div className='social-media'>

                  <button className='fb'><FontAwesomeIcon icon={faFacebook} /></button>
                  <button><FontAwesomeIcon icon={faTwitter} /></button>
                  <button><FontAwesomeIcon icon={faInstagram} /></button>

                </div>

             </div>

             

             <div className="right-content">
                 
                 <div className='about'>

                    <h2 className='about-heading'>About</h2>
                    <ul className='about-ul'>
                      <li>Company</li>
                      <li>Careers</li>
                      <li>Blog</li>
                      <li>Events</li>
                    </ul>


                 </div>

                 <div className='customers'>

                 <h2 className='about-heading'>Customers</h2>
                    <ul className='about-ul'>
                      <li>Help Center</li>
                      <li>Forum</li>
                      <li>Support</li>
                    </ul>

                 </div>

                 <div className='customers'>

                 <h2 className='about-heading'>Solution</h2>
                    <ul className='about-ul'>
                      <li>Creative</li>
                      <li>Management</li>
                      <li>Prdocut</li>
                    </ul>


                 </div>

             </div>

        </div>

        
      
    </div>
  )
}

export default Footer
