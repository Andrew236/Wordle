<template>
  <div>
    <AppTitle />
    <WordleBoard
      :wordToGuess="word"
      :guesses="guesses"
      :indexArray="indexArray"
      :currentGuess="guessArray"
    />
  </div>
</template>

<script>
import AppTitle from "../components/AppTitle";
import WordleBoard from "@/components/WordleBoard";
import EntityService from "@/services/EntityService";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HomeView",

  components: {
    AppTitle,
    WordleBoard,
  },
  methods: {
    ...mapActions({
      setWordToGuess: "application/setWordToGuess",
      setIndexArray: "application/setIndexArray",
      setGuessArray: "application/setGuessArray",
      setNumberOfGuesses: "application/setNumberOfGuesses",
    }),
  },
  computed: {
    ...mapGetters({
      word: "application/word",
      guesses: "application/guesses",
      indexArray: "application/indexArray",
      guessArray: "application/guessArray",
    }),
  },
  async beforeMount() {
    const words = await EntityService.getWords();
    this.setWordToGuess(words);
    this.setIndexArray(this.word);
    this.setGuessArray(this.word);
    this.setNumberOfGuesses(this.word);
  },
};
</script>
