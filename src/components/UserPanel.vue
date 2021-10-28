<template>
  <div class="user">
    <span>User</span>
    <button
      class="user__button"
      :class="{ user__button_active: u === user }"
      v-for="u in users"
      :key="u"
      @click="setUser(u)"
    >
      {{ u }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: String,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    setUser(user) {
      this.$emit('update:user', user);
    },
  },
};
</script>

<style scoped>
.user {
  padding: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}

.user__button {
  font-size: 1rem;
  height: 2rem;
  width: 100px;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
}

.user__button_active {
  background-color: skyblue;
}
</style>
