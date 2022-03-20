import React from 'react'
import './PostVote.css'

import { GrLinkUp, GrLinkDown } from 'react-icons/gr'

function PostVote() {
  return (
    <div className='post-vote'>
      <div className='vote-arrow vote-up'><GrLinkUp /></div>
      <div className='vote-score'>10.5k</div>
      <div className='vote-arrow vote-down'><GrLinkDown /></div>
    </div>
  )
}

export default PostVote