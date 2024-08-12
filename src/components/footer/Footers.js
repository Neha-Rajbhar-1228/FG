import React from 'react';
import "./Footers.css";

function Footers() {
  return (
    <div className='mainFooter'>
    <div>
    <span> <img alt="No" style={{maxWidth:"227px",maxHeight:"57px",objectFit:"contain"}} src="logoNavbar.png"/></span>

    

    </div>
    <div className='footerBottom'>
        <div className='footerContentFirst'>
            <div className='footerContent'>
                <span className='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </span>
                <div className='sendButton'>
                    <span className='emailButton'>Enter your email address here...</span>
                    <span className='send'>Send</span>
                </div>
            </div>
            <div className='footerIcons' >
                <div className='sections'>
                    <div className='content height'>Courses</div>
                    <span className='innerSection'>
                        <span>Subtitle1</span>
                        <span>Subtitle1</span>
                        <span>Subtitle1</span>
                    </span>
                </div>
                <div className='sections'>
                    <div className='content height'>About</div>
                    <span className='innerSection'>
                        <span>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                        <span>Contact  Us</span>
                    </span>
                </div>
                <div className='sections'>
                    <div className='content height'>Connect Us</div>
                    <span className='iconsData'>
                      <span> 
                        <img style={{maxWidth:"25px",maxHeight:"25px",objectFit:"contain"}} src="facebook_icon.png" alt="facebook"/>
                      </span>

                      <span> 
                        <img style={{maxWidth:"25px",maxHeight:"25px",objectFit:"contain"}} src="instagram_icon.png" alt="instagram"/>
                      </span>
                      <span> 
                        <img style={{maxWidth:"25px",maxHeight:"25px",objectFit:"contain"}} src="youtube_icon.png" alt="youtube"/>
                      </span>
                      <span> 
                        <img style={{maxWidth:"25px",maxHeight:"25px",objectFit:"contain"}} src="Frame 427322840.png" alt="twitter"/>
                      </span>
                      <span> 
                        <img style={{maxWidth:"25px",maxHeight:"25px",objectFit:"contain"}} src="linkedin_icon.png" alt="linkdin"/>
                      </span>
                    </span>
                </div>
            </div>
        </div>
        <div className='footerContentSecond'>
<div className='line'></div>
<div className='copy'>Copyright forcegalaxy©2024 All rights reserved.</div>
        </div>
    </div>
</div>
  )
}

export default Footers