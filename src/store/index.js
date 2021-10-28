import Vue from 'vue';
import Vuex from 'vuex';
import post from './post';
import posts from './posts';
import users from './users';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async addPart(context, payload) {
      await context.dispatch('post/add', payload);
      context.dispatch('posts/load');
    },
  },
  modules: {
    post,
    posts,
    users,
  },
});
