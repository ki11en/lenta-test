import POSTS from './data.json';

const getDelay = () => 500 + Math.random() * 1000;

export const getPartText = ({ author, text }) => `${author}: ${text}`;

let getPostsTimeout;
let getPostTimeout;
let addPartTimeout;

export const getPosts = () => {
  if (getPostsTimeout) {
    clearTimeout(getPostsTimeout);
  }
  return new Promise((res) => {
    getPostsTimeout = setTimeout(
      () =>
        res(
          POSTS.map((p) => ({
            id: p.id,
            subject: p.subject,
            created: p.created,
            partsCount: p.parts.length,
            partText: p.parts.length ? getPartText(p.parts[0]) : '',
          }))
        ),
      getDelay()
    );
  });
};

export const getPost = (id) => {
  if (getPostTimeout) {
    clearTimeout(getPostTimeout);
  }
  return new Promise((res, rej) => {
    getPostTimeout = setTimeout(() => {
      const post = POSTS.find((p) => p.id === id);

      if (!post) {
        rej('Post not found!');
        return;
      }
      res({ ...post, parts: post.parts.map((p) => ({ ...p })) });
    }, getDelay());
  });
};

export const addPart = (text, postId, author) => {
  if (addPartTimeout) {
    clearTimeout(addPartTimeout);
  }
  return new Promise((res, rej) => {
    addPartTimeout = setTimeout(() => {
      const post = POSTS.find((p) => p.id === postId);

      if (!post) {
        rej('Post not found!');
        return;
      }

      const created = new Date().toJSON().slice(0, 16).replace('T', ' ');
      const part = {
        id: post.parts.length + 1,
        author,
        text,
        created,
      };

      post.parts.push(part);
      res();
    }, getDelay());
  });
};
