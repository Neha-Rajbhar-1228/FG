import React from 'react'
import './Navbars.css';

function Navbars() {
  return (
    <div className='mainParentNavbar'>
    <div className='logoDiv'>
        
    <span> <img alt="No" style={{maxWidth:"194px",maxHeight:"48px",objectFit:"contain"}} src="logoNavbar.png"/></span>



    </div>
    <div className='headerDiv'>
        <div></div>
        <div className='secondDiv'>
            <span className='loginBtn'>
                Login
            </span>

            <span className='demoBtn'>Get a free demo</span>

            <span className='contact'>
                <span className='contactNumber'>+ 91 0123456789</span>
                <span className='phoneIcon'>
                <span> <img alt="No" style={{maxWidth:"35px",maxHeight:"35px",objectFit:"contain"}} src="call.png"/></span>

                   

                </span>
            </span>
        </div>

    </div>
</div>
  )
}

export default Navbars