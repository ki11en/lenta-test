<template>
  <div class="part">
    <div class="part__author">{{ part.author }}</div>
    <div class="part__text">{{ part.text }}</div>
    <div class="part_created">{{ part.created }}</div>
  </div>
</template>

<script>
export default {
  name: 'Part',
  props: {
    part: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.part {
  display: block;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid grey;
}

.part__author {
  font-size: 1rem;
  font-weight: 500;
  padding: 5px;
  color: purple;
}

.part__text {
  overflow-wrap: break-word;
}

.part_created {
  width: 100%;
  text-align: right;
  color: gray;
}
</style>
