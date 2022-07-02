<template>
  <div>
    <AppTitle />
    <WordleBoard :wordToGuess="word" :guesses="guesses" />
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
    }),
  },
  computed: {
    ...mapGetters({
      word: "application/word",
      guesses: "application/guesses",
    }),
  },
  async beforeMount() {
    const words = await EntityService.getWords();
    this.setWordToGuess(words);
  },
};
</script>
