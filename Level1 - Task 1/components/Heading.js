import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet} from '@fortawesome/free-solid-svg-icons';
import { faHandsBubbles} from '@fortawesome/free-solid-svg-icons';
import { faGear} from '@fortawesome/free-solid-svg-icons';
import { faOilCan} from '@fortawesome/free-solid-svg-icons';


const Heading = () => {
  return (
    <div className='l'>
         
      <div className='sec-1'>
        
        <label className='icon'><FontAwesomeIcon icon={faDroplet} /></label>
        <div className='topic'>
          <h1>Car Paint</h1>
        </div>
        <div className='content'>
          <p>Automotive paint is used on automobiles for both protection and decoration purposes.</p>
        </div>
        
      </div>

      <div className='sec-1'>
        
        <label className='icon'><FontAwesomeIcon icon={faHandsBubbles} /></label>
        <div className='topic'>
          <h1>Wash And Clean</h1>
        </div>
        <div className='content'>
          <p>A car wash,is a facility used to clean the exterior, and in some cases the interior, of cars.</p>
        </div>
        
      </div>

      <div className='sec-1'>
        
        <label className='icon'><FontAwesomeIcon icon={faGear} /></label>
        <div className='topic'>
          <h1>Alignment</h1>
        </div>
        <div className='content'>
          <p>Alignment refers to an adjustment of a vehicle's suspension – the system that connects a vehicle to its wheels</p>
        </div>
        
      </div>
      
      <div className='sec-1'>
        
        <label className='icon'><FontAwesomeIcon icon={faOilCan} /></label>
        <div className='topic'>
          <h1>Oil Changes</h1>
        </div>
        <div className='content'>
          <p>An Oil Change is the act of removing the used oil in your engine and replacing it with new, clean oil.</p>
        </div>
        
      </div>
      

    </div>
  )
}

export default Heading
