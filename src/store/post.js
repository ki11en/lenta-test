import { addPart, getPost } from '../services/posts.service';

export default {
  namespaced: true,
  state: {
    post: null,
  },
  mutations: {
    setPost(state, post) {
      state.post = post;
    },
  },
  actions: {
    async load(context, id) {
      const post = await getPost(id);
      context.commit('setPost', post);
    },
    async add(_context, { text, postId, author }) {
      await addPart(text, postId, author);
    },
  },
};
