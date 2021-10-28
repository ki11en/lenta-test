<template>
  <TheLayout>
    <router-view />
  </TheLayout>
</template>

<script>
import TheLayout from './components/TheLayout.vue';

export default {
  name: 'App',
  components: {
    TheLayout,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
}

* {
  margin: 0;
  padding: 0;
}
</style>
