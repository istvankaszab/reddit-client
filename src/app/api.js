const REDDIT_API = 'https://www.reddit.com';

export const getReddits = async (searchTerm, subredditFilter) => {
  let redditURL = '';

  redditURL = `${REDDIT_API}/.json`;
  if(searchTerm) redditURL = `${REDDIT_API}/search.json?q=${searchTerm}`;
  if(subredditFilter) redditURL = `${REDDIT_API}/${subredditFilter}.json`;
  
  const response = await fetch(redditURL);
  const posts = await response.json();

  return posts.data.children.map((post) => post.data);
};

export const getRedditComments = async (permalink) => {
  const response = await fetch(`${REDDIT_API}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`${REDDIT_API}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
};