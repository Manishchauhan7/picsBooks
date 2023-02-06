import { Person, Search,Chat,NotificationsActive,Bookmarks } from '@mui/icons-material'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react'
import "./TopBarComp/Topbar.css"

export default function Topbar() {
  return (
<div className='Asus '> 
<nav class="navbar navbar-expand-lg bg-primary-subtle">
  <div class="container-fluid bg-warning ">
    <a class="navbar-brand fs-2 text-primary" href="https://unsplash.com/">PicsBook</a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <a class="nav-link active fw-bold" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fw-bold" href="https://www.blogger.com/about/?bpli=1">Blog</a>
        </li>
        <li class="nav-item  dropdown">
          <a class="nav-link active fw-bold dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Documentaion
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">Introduction</a></li>
            <li><a class="dropdown-item" href="#">Theme</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="https://www.linkedin.com/in/manishc7/">About Me</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold active" href='https://www.youtube.com/'>Videos</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
  )
}
    //   <div className='TopbarContainer'>
//     <div className='Topbarleft'>
//         <span className='Logo'>PicsBooks</span>
//     </div>

//     <div className='Topbarcenter'>
//         <div className='Searchbar'>
//         <Search className='Searchicon'/>
// <input placeholder='Search Videos,friends and Post' className='SearchContent' />
//         </div>
//     </div>

//     <div className='Topbarright'>
//  <div className='TopbarLinks'>
//     <a className='Link' 
//     href='https://www.youtube.com/watch?v=V6D-Lh_t0dA'>Homepages</a>    
//  </div>
//  <div className='TopbarLinks'>
//      <a href='https://tailwindcss.com/docs/installation' className='Link'>LinkItems</a>
   
//  </div>
//  <div className='Topbaricons'>
//     <div className='IconsItems'>
//         <Person/>
//         <span className='IconsBadge'>10</span>
//     </div>
//     <div className='IconsItems'>
//         <Chat/>
//         <span className='IconsBadge'>88</span>
//     </div>
//     <div className='IconsItems'>
//         <NotificationsActive/>
//         <span className='IconsBadge'>10</span>
//     </div>
//     <div className='IconsItems'>
//         <Bookmarks/>
//         <span className='IconsBadge'>15</span>
//     </div>
//  </div>
//  <img src='/images/technology.jpg' className='TopbarImage'/>
//     </div>

//      </div>
