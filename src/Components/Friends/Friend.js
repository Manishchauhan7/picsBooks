import React from 'react'
 import "./Friend.css"
export default function Friend({user}) {
  return (
    <li className='rightbarFriend'>
    <div className='rightbaruserimg'>
    <img src={user.profilePicture} className='profileImg' alt='true'/>
    
    <span className='Useronline'></span>
    </div>
    <span className='UserName'>{user.username}</span>
  </li>
   
  )
}
