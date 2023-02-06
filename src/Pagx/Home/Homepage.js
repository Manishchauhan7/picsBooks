import React from 'react'
import "./Homestyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/Rightbar/Rightbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Topbar from '../../Components/Topbar'

export default function Homepage() {
  return (
    <>
     <Topbar/>
    
     <div className='HomeContainer bg-body-tertiary'> 
    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
    </>
    
  )
}
