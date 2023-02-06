import React from 'react'
import "./Rightbar.css"
import Friend from "../Friends/Friend"
import {Users} from '../../DummyFile/Dummy'
  export default function Rightbar() {
  return (
     <div className='UpperRight'>
     
      <div className='rightbarWrapper'>
      <span className='Title'>Birthday</span>
        <div className='birthdayContainer'>
           <span className='birthdaytext'>
            {" "}
             <b>Ankit</b> and <b>Lalit</b> today have birthday.
           </span>
        </div>
        <img src='./images/5.jpg' className='rightbarAd' alt='true'/>
 <h4 className='rightbarTitle'>Contacts</h4> 
 <ul className='rightbarFriendList'>
  {Users.map(u=>(
    <Friend key={u.id} user={u}/>
  ))}
 </ul>     
 </div>
     </div>

   )
}
