import React, { useState } from 'react'
import './Post.css'
import {MoreVert,ThumbUp,Favorite} from '@mui/icons-material';
import { Users } from '../../DummyFile/Dummy';
export default function Post({post}) {
  const [like,setLike]=useState(post.like)
  const [islike,setLiked]=useState(false)
  const Likehabdler=()=>
  {
    setLike(islike?like-1:like+1)
    setLiked(!islike)
  }
  return (
     <div className='Postitems'>
    <div className='PostWrapper'>
    
    <div className='PostTop'>
    
    <div className='PostTopLeft'>
        <img className='UserProfile' src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt='true'/>
        <span className='UserName'>{Users.filter((u)=>u.id===post.userId)[0].username}</span>
        <span className='ActiveTime'>{post.date}</span>       
         </div>
        <div className='PostTopRight'>
        <MoreVert/>
         </div>
         </div>
        <div className='PostCenter'>
        <span className='PostSpan'>{post.desc}</span>
         <img className='ImageToPost' src={post.photo} alt='true' />

        </div>
        <div className='PostBottom'>
            <div className='PostBottomleft'>
                <ThumbUp className='Thumb' htmlColor='white' onClick={Likehabdler}/>
                <Favorite className='Heart' htmlColor='white' onClick={Likehabdler}/>
                </div>
                <span className='LikeCount'>{like}</span>
                 <div className='BottomText'>
                <span className='Comments'>{post.comment} comments</span>
                <span className='Comments'>{post.share} shares</span>
                </div>
            
        </div>
</div>
    </div>
  )
}
