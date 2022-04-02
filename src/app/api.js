const REDDIT_API = 'https://www.reddit.com/';

export const getReddits = async (subreddit) => {
  let redditURL = '';

  if(subreddit) {
    redditURL = `${REDDIT_API}search.json?q=${subreddit}`;
  } else {
    redditURL = `${REDDIT_API}.json`;
  }
  
  const response = await fetch(redditURL);
  const posts = await response.json();

  return posts.data.children.map((post) => post.data);
};

export const getComments = async (permalink) => {
  const response = await fetch(`${REDDIT_API}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};
