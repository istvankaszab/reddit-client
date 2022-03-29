const REDDIT_API = 'https://www.reddit.com/';

export const getReddits = async (subreddit) => {
  const response = await fetch(`${REDDIT_API}${subreddit}.json`);
  const posts = await response.json();

  return posts.data.children.map((post) => post.data);
};

export const getComments = async (permalink) => {
  const response = await fetch(`${REDDIT_API}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};
