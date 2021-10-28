const users = ['vasya', 'petya', 'petr', 'vasiliy'];

export default {
  namespaced: true,
  state: {
    user: users[0],
    users,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser(context, user) {
      context.commit('setUser', user);
    },
  },
};
