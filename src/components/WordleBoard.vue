<template>
  <div>
    <div v-for="guess in guesses" :key="guess" class="guess-container mt-2">
      <input
        class="test-styles ml-2"
        v-for="word in wordToGuess"
        :key="word"
        type="text"
        size="1"
        maxlength="1"
        :disabled="false"
        @keyup="$event.target.nextElementSibling.focus()"
        @keyup.delete="$event.target.previosElementSibling.focus()"
      />
    </div>
    <div class="submit-button-container mt-10">
      <v-btn> Submit Guess</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "WordleBoard",

  props: {
    guesses: Number,
    wordToGuess: String,
  },

  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.test-styles {
  border: 2px solid lightgray;
  width: 62px;
  height: 62px;
}

.guess-container {
  display: flex;
  justify-content: center;
  align-content: center;
}

.submit-button-container {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
