import React, { useEffect, useState } from 'react'
import './PostsList.css'
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, selectPosts } from '../../features/redditsSlice';

function PostsList() {
 
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getPosts(''));
  }, []);

  const posts = useSelector(selectPosts);

  return (
    <main>
      {posts.map((post) => { return <Post key={post.id} post={post} /> })}
    </main>
  )
}

export default PostsList;