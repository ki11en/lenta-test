<template>
  <div class="layout">
    <div class="layout__left-content">
      <UserPanel :users="users" :user.sync="user" />
      <PostsList :posts="posts" :loading="postsLoading" />
    </div>
    <div class="layout__main">
      <div class="layout__toolbar">
        <div class="layout__toolbar-subject">
          Тема: {{ selectedPostSubject }}
        </div>
        <div class="layout__toolbar-partscount">
          Cообщений: {{ selectedPostPartsCount }}
        </div>
      </div>
      <div class="layout__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import PostsList from './PostsList.vue';
import UserPanel from './UserPanel.vue';

export default {
  name: 'TheLayout',
  components: {
    PostsList,
    UserPanel,
  },
  async mounted() {
    this.postsLoading = true;
    await this.$store.dispatch('posts/load');
    this.postsLoading = false;
  },
  data() {
    return {
      postsLoading: false,
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
    selectedPost() {
      if (this.postsLoading) {
        return null;
      }
      const postId = this.$route.params.id;

      if (!postId) {
        return null;
      }

      return this.posts.find((p) => p.id === +postId);
    },
    selectedPostSubject() {
      return this.selectedPost ? this.selectedPost.subject : '';
    },
    selectedPostPartsCount() {
      return this.selectedPost ? this.selectedPost.partsCount : '';
    },
    user: {
      get() {
        return this.$store.state.users.user;
      },
      set(user) {
        this.$store.dispatch('users/setUser', user);
      },
    },
    users() {
      return this.$store.state.users.users;
    },
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  height: 100%;
}

.layout__left-content {
  width: 400px;
  border-right: 1px solid lightgray;
  background-color: whitesmoke;
}

.layout__main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.layout__toolbar {
  background-color: whitesmoke;
  padding: 10px;
  border-bottom: 1px solid lightgray;
  height: 60px;
}

.layout__toolbar-subject {
  height: 40px;
  font-size: 2rem;
}

.layout__toolbar-partscount {
  font-size: 0.8rem;
}

.layout__content {
  flex: 1;
  overflow-y: hidden;
}
</style>
