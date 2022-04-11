import React from 'react'
import './PostBody.css'
import PostDetails from '../PostDetails/PostDetails'
import Comment from '../Comment/Comment'

function PostBody(props) {
  const { post, isLoading, index } = props;

  if(isLoading) {
    return (
      <div className='post-body'>
        <div className='is-loading post-title-loading'></div>
        <div className='is-loading post-body-loading'></div>
      </div>
    )
  }

  const showComments = () => {
    if(post.showComments) {
      if(!post.loadingComments) {
        return (
          <ul>
            {post.comments.map((comment) => {
              return ( 
                <li>
                  <Comment
                    key={comment.id}
                    author={comment.author}
                    body={comment.body}
                    created_utc={comment.created_utc}
                  />
                 </li>
              )
            })}
  
          </ul>
        )
      }
      
    }
    
  }

  return (
    <div className='post-body'>
      <h3>{post.title}</h3>      
      <img className='post-image' src={post.url} alt='' />
      <PostDetails
        author={post.author}
        created_utc={post.created_utc}
        num_comments={post.num_comments}
        index={index}
        permalink={post.permalink}
        showComments={post.showComments}
      />
      {showComments()}
    </div>
  )
}

export default PostBody