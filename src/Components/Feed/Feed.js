import React from 'react'
import "./Feed.css"
import Share from '../ShareComponents/Share'
import Post from '../Posted/Post'
import {Posts} from"../../DummyFile/Dummy"
import Centered from '../Center/Centered'
 export default function Feed() {
  return (
    <div className='Feedback'>
      <div className='Feedwrapper'>
      <Centered/>

      <Share/>
       {Posts.map((p)=>(
          <Post key={p.id} post={p}/>
      ))}

       </div>
    </div>
  )
}
