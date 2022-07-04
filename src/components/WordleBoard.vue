<template>
  <div>
    <div v-for="guess in guesses" :key="guess" class="guess-container mt-2">
      <input
        class="input-styles"
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
    indexArray: Array,
    currentGuess: Array,
  },
  data() {
    return {
      isButtonDisabled: true,
      guessedLetters: [],
      guessUserIsOn: 0,
      currentGuessTwoDArray: this.currentGuess,
    };
  },

  components: {},
  methods: {
    letterEntered(e, index) {
      if (e.key === "Backspace" || e.key === "Delete") {
        return e.preventDefault(); // Don't do anything to the input value
      } else {
        if (index === this.wordToGuess.length - 1) {
          this.currentGuessTwoDArray[this.guessUserIsOn].push(e.key);
          this.isButtonDisabled = false;
          return;
        }
        this.$refs["input-handlers"][index + 1].focus();

        this.currentGuessTwoDArray[this.guessUserIsOn];
        this.currentGuessTwoDArray[this.guessUserIsOn].push(e.key);
      }
    },
    letterDeleted(index) {
      if (index === 0) {
        this.$refs["input-handlers"][index].value = "";
        this.currentGuessTwoDArray[this.guessUserIsOn].pop();
        return;
      } else {
        this.$refs["input-handlers"][index].value = "";
        this.$refs["input-handlers"][index - 1].focus();
        this.currentGuessTwoDArray[this.guessUserIsOn].pop();
      }
    },
    submitGuess() {
      this.currentGuessTwoDArray[this.guessUserIsOn].forEach(
        (letter, index) => {
          this.checkLetterCorrectness(letter, index);
        }
      );
      if (this.checkIfWon()) {
        alert("congrats you won the game");
      } else {
        this.guessUserIsOn += 1;

        this.$refs["input-handlers"].splice(0, 5);
        this.$refs["input-handlers"][0].focus();
      }
    },
    checkLetterCorrectness(letter, index) {
      if (this.wordToGuess.charAt(index) === letter) {
        this.$refs["input-handlers"][index].classList.add(
          "correct-letter-and-position"
        );
      } else if (this.wordToGuess.includes(letter)) {
        this.$refs["input-handlers"][index].classList.add(
          "correct-letter-wrong-position"
        );
      } else {
        this.$refs["input-handlers"][index].classList.add("wrong-letter");
      }
    },
    checkIfWon() {
      for (
        let index = 0;
        index < this.currentGuessTwoDArray[this.guessUserIsOn].length;
        index++
      ) {
        if (
          this.currentGuessTwoDArray[this.guessUserIsOn][index] !==
          this.wordToGuess[index]
        )
          return false;
      }
      return true;
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
.input-styles {
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
  background-color: #00e600;
}

.correct-letter-wrong-position {
  background-color: #e6b800;
}

.wrong-letter {
  background-color: gray;
}
</style>
