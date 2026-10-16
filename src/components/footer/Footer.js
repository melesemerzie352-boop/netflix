import React from 'react'
import "./footer.css"
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
const Footer = () => {
  return (
    <div className='footer_outer_container'>

      <div className='fotter_container'>

<div  className='footer_left'>

<div className='right'>
<ul> 
  <li>
 <TelegramIcon/><span>Telegram</span>
  </li>
  <li>
  <InstagramIcon/><span>Instagram</span>
  </li>
  <li >
    <GitHubIcon/><span>GitHub</span>
  </li>
  <li>
    <CallIcon/><span>call us</span>
  </li>

<li>
    <EmailIcon/><span>email</span>
  </li>
  <li>
    <PhoneIphoneIcon/><span>phone</span>
  </li>
</ul>

</div>

</div>
      </div>

    </div>
  )
}

export default Footer;