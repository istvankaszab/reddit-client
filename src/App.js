import React from 'react';
import Header from './components/Header/Header'
import PostsList from './components/PostsList/PostsList';
import Subreddits from './components/Subreddits/Subreddits';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <div className='reddits'>
        <PostsList />
        <Subreddits />
      </div>
    </div>
  );
}

export default App;
