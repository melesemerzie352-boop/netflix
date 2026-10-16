
import "./Header.css"
import netflix_logo from "../../asset/images/image.png";
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const Header = () => {
  return (
    <div className='header_outer_continer'>
        <div className='header_contianer'>
            <div className='header_left'>
<ui>
    <li><img src={netflix_logo}  alt="log-not found"    width={100}/></li>
<li>netflix</li>
 <li>home</li>
  <li>tvShow</li>
   <li>movies</li>
    <li>latest</li>
    <li>mr.list</li>
  <li>browse by langeuge</li>
  <div className="header__search">
  
  {/* <input type="text" placeholder="Search movies..." /> */}
  <div className="icons">
  <SearchIcon />
  <CircleNotificationsIcon />
  <AccountBoxIcon />
      </div>
</div>

</ui>
   </div>
            
             
        </div>
    </div>
  )
}

export default Header