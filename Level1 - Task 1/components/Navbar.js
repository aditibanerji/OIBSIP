import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { faCar} from '@fortawesome/free-solid-svg-icons';
import washing from './Car_Wash_Vector_Illustration-removebg-preview.png';
import Heading from './Heading';
import Footer from './Footer';

const Navbar = () => {
  return (

    <div> 
    <div className='Navbar-container'>
        <input type="checkbox" className='check'></input>
        <label className='bars'><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></label>
        <label className='logo'>Unique Autos <FontAwesomeIcon icon={faCar} /></label>
        
        <ul className='navbar-items'>
            <li><a href="#" className='active'>Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">contact</a></li>
            <li><a href="#">services</a></li>
        </ul>

    </div>

    <div className='heading'>
          
          <div className='big-heading'>
            <h1>Auto Care <br/>Car Washing</h1>
          </div>

          <div className='heading-content'>
            <p>If you want the very best for your car, you've come to the 
              right place.<br/> Unique Auto Wash is a leading professional Car cleaning
              Service and has<br/> been helping customers maintain the value of
              their cars for over 10 years. </p>
          </div>

          <div className='book'>
            <button className='book-btn'>Book Now</button>
          </div>


    </div>

    
    <div className='image'>
      <img src={washing}></img>
    </div>

  
    <div className='features'>

     <Heading></Heading>

    </div>

    <div className='footer'>

     <Footer></Footer>

    </div>

              
              
</div>
    
  )
}

export default Navbar
