<template>
  <form class="add-part" action="" @submit.prevent="submit($event)">
    <input
      name="text"
      ref="input"
      class="add-part__input"
      v-model="text"
      placeholder="Write a message..."
      :disabled="sending"
    />
    <button
      type="submit"
      class="add-part__send-button"
      :disabled="submitDisabled"
    >
      {{ buttonText }}
    </button>
  </form>
</template>

<script>
export default {
  name: 'AddPart',
  props: {
    sending: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      text: '',
    };
  },
  computed: {
    submitDisabled() {
      return this.sending || this.disabled || this.text.length === 0;
    },
    buttonText() {
      return this.sending ? 'Sending...' : 'Send';
    },
  },
  methods: {
    submit() {
      if (this.submitDisabled) {
        return;
      }

      this.$emit('addpart', this.text);
      this.text = '';
    },
  },
  watch: {
    sending(value) {
      if (!value) {
        this.$nextTick(() => this.$refs.input.focus());
      }
    },
  },
};
</script>

<style scoped>
.add-part {
  display: flex;
  padding: 10px;
  background-color: white;
}

.add-part__input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
}

.add-part__input:focus-visible {
  border: none;
}

.add-part__input:disabled {
  opacity: 0.5;
}

.add-part__send-button {
  width: 100px;
  height: 2rem;
}
</style>
