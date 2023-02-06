import React from 'react'
import "./Sidebar.css"
import {PeopleAltTwoTone,Send,HourglassBottom,RssFeed,Chat,ThumbUp,Home,LocationOn,Favorite,Headphones,WifiCalling3,Settings,Logout } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
export default function Sidebar() {
  return (
    <div className='Side'>
     <div className='Side-padding'>
       <ul className='SidebarItems'>
       <div className='Account'>
       <img  className='AccountImage' src='./images/2.jpg' alt=''/>
       <span className='AccountNameText'>Manish Chauhan</span>
       </div>
        
        <li className='SidebarList'>
           <PeopleAltTwoTone htmlColor='SandyBrown' className='SidebarIcons'/>
            <span className='SidebarIconsText'>Friends</span>
        </li>
        <li className='SidebarList'>
            <Send  htmlColor='DeepPink ' className='SidebarIcons'/>
            <span className='SidebarIconsText'>Messanger Kits</span>
        </li>
        <li className='SidebarList'>
            <HourglassBottom htmlColor='Red ' className='SidebarIcons'/>
            <span className='SidebarIconsText'>Most Recents</span>
        </li>
         
        <li className='SidebarList'>
            <RssFeed htmlColor='SteelBlue ' className='SidebarIcons'/>
            <span className='SidebarIconsText'>Feeds</span>
        </li>
        <li className='SidebarList'>
            <Chat htmlColor='Navy ' className='SidebarIcons'/>
            <span className='SidebarIconsText'>Chats</span>
        </li>
        <li className='SidebarList'>
            <ThumbUp htmlColor='Chocolate ' className='SidebarIcons'/>
            <span className='SidebarIconsText'>Likes</span>
        </li>
        <li className='SidebarList'>
            <Home htmlColor='MediumSlateBlue ' className='SidebarIcons'/>
            <span className='SidebarIconsText'>Home</span>
        </li>
        <li className='SidebarList'>
            <LocationOn htmlColor='DarkGreen ' className='SidebarIcons'/>
            <span className='SidebarIconsText'>Location</span>
        </li>
         
        <li className='SidebarList'>
            <Headphones htmlColor='DarkOrchid' className='SidebarIcons'/>
            <span className='SidebarIconsText'>Listen To Music</span>
        </li>
        <li className='SidebarList'>
            <WifiCalling3  htmlColor='Fuchsia' className='SidebarIcons'/>
            <span className='SidebarIconsText'>Phone Number</span>
        </li>
        <li className='SidebarList'>
            <Settings htmlColor='CornflowerBlue ' className='SidebarIcons'/>
            <span className='SidebarIconsText'>Setting</span>
        </li>
        <li className='SidebarList'>
            <Logout htmlColor='Olive ' className='SidebarIcons'/>
            <span className='SidebarIconsText'>LogOut</span>
        </li>
       </ul>
       <div class="d-grid gap-2 col-6 mx-auto">
   <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">See More</button>
   <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">Information</a></li>
    <li><a class="dropdown-item" href="https://policies.google.com/privacy?hl=en-US">Privacy</a></li>
    <li><a class="dropdown-item" href="https://safety.google/nest/">safety Centre</a></li>
  </ul>
</div>
 
      </div>
     </div>
  )
}
