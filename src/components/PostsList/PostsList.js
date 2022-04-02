import React, { useEffect } from 'react'
import './PostsList.css'
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, selectPosts, setSearchTerm } from '../../features/redditsSlice';

function PostsList() {
 
  const dispatch = useDispatch();
  const reddits = useSelector((state) => state.reddits);
  const { isLoading, error, searchTerm } = reddits;

  useEffect(() => {
    dispatch(getPosts(searchTerm));
  }, [searchTerm]);

  const posts = useSelector(selectPosts);

  if(isLoading) {
    return (
      <main>
        <h3>Loading posts ...</h3>
      </main>
    )
  }

  if(error) {
    return (
      <main>
        <h3 className='error'>Error. Could not load posts.</h3>
      </main>
    )
  }

  if(posts.length === 0) {
    return (
      <main>
        <h3 className='error'>There is no any posts. Try again.</h3>
      </main>
    )
  }

  return (
    <main>
      {posts.map((post) => { return <Post key={post.id} post={post} /> })}
    </main>
  )
}

export default PostsList;