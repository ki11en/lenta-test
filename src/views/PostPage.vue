<template>
  <div class="post-page">
    <Spinner
      v-show="showSpinner"
      class="post-page__spinner"
      :message="spinnerMessage"
    />
    <div class="post-page__parts-container">
      <div v-show="showParts" class="post-page__parts">
        <Part
          class="post-page__part"
          v-for="part in post.parts"
          :class="{ 'post-page__part_active': part.author === user }"
          :key="part.id"
          :part="part"
        />
      </div>
    </div>
    <AddPart
      class="post-page__add-part"
      @addpart="addPart($event)"
      :sending="partSending"
      :disabled="postLoading"
    />
  </div>
</template>

<script>
import Part from '../components/Part.vue';
import AddPart from '../components/AddPart.vue';
import Spinner from '../components/Spinner.vue';

export default {
  name: 'PostPage',
  components: {
    Part,
    AddPart,
    Spinner,
  },
  data() {
    return {
      postLoading: false,
      partSending: false,
    };
  },
  mounted() {
    this.loadPost();
  },
  computed: {
    post() {
      return (
        this.$store.state.post.post || {
          id: '',
          subject: '',
          created: '',
          parts: [],
        }
      );
    },
    user() {
      return this.$store.state.users.user;
    },
    postId() {
      return +this.$route.params.id;
    },
    showSpinner() {
      return this.postLoading || this.partSending;
    },
    spinnerMessage() {
      if (this.postLoading) {
        return 'Loading';
      }

      if (this.partSending) {
        return 'Sending';
      }

      return '';
    },
    showParts() {
      return this.postId === this.post.id;
    },
  },
  watch: {
    postId: function () {
      this.loadPost();
    },
  },
  methods: {
    async loadPost() {
      this.postLoading = true;
      await this.$store.dispatch('post/load', this.postId);
      this.postLoading = false;
    },
    async addPart(text) {
      this.partSending = true;

      const { postId, user } = this;

      await this.$store.dispatch('addPart', {
        author: user,
        text,
        postId: postId,
      });

      this.partSending = false;

      if (this.postId === postId) {
        await this.loadPost();
      }
    },
  },
};
</script>

<style scoped>
.post-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #dce7bc;
  position: relative;
}

.post-page__parts-container {
  flex: 1;
  height: 100%;
  overflow: auto;
}

.post-page__parts {
  padding: 10px;
}

.post-page__part {
  margin-bottom: 10px;
  max-width: 500px;
  background-color: whitesmoke;
}

.post-page__part:last-child {
  margin-bottom: 0;
}

.post-page__part_active {
  background-color: #d3ff9e;
}

.post-page__spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.post-page__add-part {
  border-top: 1px solid lightgray;
}
</style>
