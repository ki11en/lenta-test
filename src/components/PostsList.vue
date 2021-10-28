<template>
  <Spinner v-if="loading" message="Loading" />
  <ul v-else class="posts-list">
    <li v-for="post in posts" :key="post.id">
      <router-link class="posts-list__item" :to="`/post/${post.id}`">
        <Post :post="post" />
      </router-link>
    </li>
  </ul>
</template>

<script>
import Post from './Post.vue';
import Spinner from './Spinner.vue';

export default {
  name: 'PostsList',
  components: {
    Post,
    Spinner,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.posts-list__item {
  display: block;
  text-decoration: none;
  color: black;
  border-bottom: 1px solid grey;
}

.posts-list__item:hover {
  background-color: lightgray;
}

.router-link-exact-active,
.router-link-exact-active:hover {
  background-color: skyblue;
}
</style>
