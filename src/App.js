import React from 'react';
import Header from './components/Header/Header'
import PostsList from './components/PostsList/PostsList';
import SubredditsList from './components/SubredditsList/SubredditsList';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <div className='reddits'>
        <PostsList />
        <SubredditsList />
      </div>
    </div>
  );
}

export default App;
