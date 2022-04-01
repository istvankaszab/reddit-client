import React from 'react'
import './PostVote.css'
import { GrLinkUp, GrLinkDown } from 'react-icons/gr'
import { numberToText } from '../../utils/utils';

function PostVote(props) {
  const { id, score } = props;

  return (
    <div className='post-vote'>
      <div className='vote-arrow vote-up'><GrLinkUp /></div>
      <div className='vote-score'>{numberToText(score)}</div>
      <div className='vote-arrow vote-down'><GrLinkDown /></div>
    </div>
  )
}

export default PostVote