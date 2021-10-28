<template>
  <div class="post">
    <div class="post__header">
      <span class="post__subject">{{ post.subject }}</span>
      <span class="post__created">{{ post.created }}</span>
    </div>
    <div class="post__content">{{ post.partText }}</div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 5px;
}

.post__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.post__subject {
  font-size: 1.5rem;
  font-weight: 500;
}

.post__created {
  font-size: 1rem;
}

.post__content {
  padding: 10px;
  font-size: 1rem;
  color: darkslategray;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
