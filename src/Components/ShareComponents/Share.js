import { PermMedia,LiveTv,Mood,Attachment } from '@mui/icons-material'
import React from 'react'
import "./Share.css"
export default function Share() {
  return (
    <div className='Share'>
    <div className='ShareWraper'> 
      <div className='ShareTop'>
        <img className='ProfileImage' src='/images/2.jpg'/>
        <span className='ProfileName'>Manish Chuahan</span>
        <button className='Friend'>Friends</button>
        </div>
         <div className='Mind'>
           <form>
    <div class="form-group fs-5 mt-2">
      <label for="comment" >Post What's you Feel</label>
      <textarea class="form-control mt-2" rows="5" id="comment"></textarea>
    </div>
  </form>
  </div>
       <hr className='ShareHr'/>
      <div className='ShareBottom'>
       
        <div className='ShareOption'>
            <div className='Shareit'>
            <LiveTv htmlColor='Tomato' className='ShareIcon'/>
                <span className='ShareTextOption'>Live Video</span>
            </div>
            <div className='Shareit'>
            <PermMedia htmlColor='MediumSeaGreen' className='ShareIcon'/>
                <span className='ShareTextOption'> Photo/Video</span>
            </div>
            <div className='Shareit'>
            <Mood htmlColor='DarkOrange' className='ShareIcon'/>
                <span className='ShareTextOption'>Feeling/Activity</span>
            </div>
            <div className='Shareit'>
            <Attachment htmlColor='DarkMagenta' className='ShareIcon'/>
                <span className='ShareTextOption'>Reels</span>
            </div>
        </div>
         
      </div>
      <div class="Button">
  <button className='PostButton' type="button">Post</button>
 </div>
    </div>
  
    </div>
  )
}
