<template>
  <div>
    <div v-for="guess in guesses" :key="guess" class="guess-container mt-2">
      {{ wordToGuess }}
      <input
        class="test-styles"
        v-for="(word, index) in wordToGuess"
        :key="index"
        ref="input-handlers"
        type="text"
        size="1"
        maxlength="1"
        @keyup="letterEntered($event, index)"
        @keyup.delete="letterDeleted(index)"
      />
    </div>
    <div class="submit-button-container mt-10">
      <v-btn @click="submitGuess()" :disabled="isButtonDisabled">
        Submit Guess</v-btn
      >
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
  data() {
    return {
      isButtonDisabled: true,
      guessedLetters: [],
      guessUserIsOn: 0,
    };
  },

  components: {},
  methods: {
    letterEntered(e, index) {
      if (e.key === "Backspace" || e.key === "Delete") {
        return e.preventDefault(); // Don't do anything to the input value
      } else {
        if (index === this.wordToGuess.length - 1) {
          this.guessedLetters.push(e.key);
          this.isButtonDisabled = false;
          return;
        }
        this.$refs["input-handlers"][index + 1].focus();
        this.guessedLetters.push(e.key);
      }
    },
    letterDeleted(index) {
      console.log("aaa", this.$refs["input-handlers"]);
      if (index === 0) {
        this.$refs["input-handlers"][index].value = "";
        this.guessedLetters.pop();
        return;
      } else {
        this.$refs["input-handlers"][index].value = "";
        this.$refs["input-handlers"][index - 1].focus();
        this.guessedLetters.pop();
      }
    },
    submitGuess() {
      this.guessedLetters.forEach((letter, index) => {
        this.checkLetterCorrectness(letter, index);
      });
      this.guessedLetters.splice(0, this.guessedLetters.length);

      // console.log("this.giuesses", this.guessedLetters);
    },
    checkLetterCorrectness(letter, index) {
      if (this.wordToGuess.charAt(index).toLowerCase() === letter) {
        this.$refs["input-handlers"][index].classList.add(
          "correct-letter-and-position"
        );
      } else if (this.wordToGuess.toLowerCase().includes(letter)) {
        this.$refs["input-handlers"][index].classList.add(
          "correct-letter-wrong-position"
        );
      } else {
        this.$refs["input-handlers"][index].classList.add("wrong-letter");
      }
    },
  },
  computed: {
    focusInput() {
      return this.$refs["input-handlers"][0].focus();
    },
  },
  updated() {
    this.focusInput;
  },
};
</script>

<style lang="scss" scoped>
.test-styles {
  text-align: center;
  border: 2px solid lightgray;
  width: 62px;
  height: 62px;
  gap: 10px;
  caret-color: transparent;
  pointer-events: none;
  font-size: 20px;
}

.guess-container {
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 10px;
}

.submit-button-container {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.correct-letter-and-position {
  background-color: green;
}

.correct-letter-wrong-position {
  background-color: #e6b800;
}

.wrong-letter {
  background-color: gray;
}
</style>
