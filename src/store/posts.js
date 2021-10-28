import { getPartText, getPosts } from '../services/posts.service';

export default {
  namespaced: true,
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async load(context) {
      const posts = await getPosts();
      context.commit('setPosts', posts);
    },
    async partAdded(context, { text, postId, author }) {
      const posts = context.state.posts.map((p) =>
        p.id !== postId
          ? p
          : {
              ...p,
              partsCount: p.partsCount + 1,
              partText: getPartText({ text, author }),
            }
      );
      context.commit('setPosts', posts);
    },
  },
};
