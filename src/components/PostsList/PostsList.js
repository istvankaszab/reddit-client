import React, { useEffect } from 'react';
import './PostsList.css';
import Post from '../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, selectPosts } from '../../features/redditSlice';

function PostsList() {
 
  const dispatch = useDispatch();
  const reddits = useSelector((state) => state.reddits);
  const { isLoading, error, searchTerm, subredditFilter } = reddits;

  useEffect(() => {
    dispatch(getPosts(searchTerm, subredditFilter));
  }, [dispatch, searchTerm, subredditFilter]);

  const posts = useSelector(selectPosts);

  if(isLoading) {
    return (
      <main>
        <Post key='0' isLoading={isLoading} />
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
        <h3 className='error'>There are no any posts. Try again.</h3>
      </main>
    )
  }

  return (
    <main>
      {posts.map((post, index) => {
        return (
          <Post
            key={post.id}
            post={post}
            index={index}
          />
        )
      })}
    </main>
  )
}

export default PostsList;