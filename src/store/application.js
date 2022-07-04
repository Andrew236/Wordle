export const namespaced = true;

export const state = {
  word: null,
  lengthOfWord: null,
  guesses: null,
  indexArray: [],
  guessArray: [],
};

export const actions = {
  setWordToGuess({ commit }, words) {
    commit("SET_WORD_TO_GUESS", words);
  },
  setIndexArray({ commit }, word) {
    commit("SET_INDEX_ARRAY", word);
  },
  setGuessArray({ commit }, word) {
    commit("SET_GUESS_ARRAY", word);
  },
  setNumberOfGuesses({ commit }, word) {
    commit("SET_NUMBER_OF_GUESSES", word);
  },
};

export const mutations = {
  SET_WORD_TO_GUESS(state, words) {
    state.word = words[Math.floor(Math.random() * words.length)].toLowerCase();
    state.lengthOfWord = state.word.length;
    state.guesses = state.lengthOfWord + 1;
  },
  SET_INDEX_ARRAY(state, word) {
    let value = 0;
    for (let index = 0; index < word.length + 1; index++) {
      state.indexArray.push(value);
      value += 5;
    }
  },
  SET_GUESS_ARRAY(state, word) {
    for (let index = 0; index < word.length + 1; index++) {
      state.guessArray.push([]);
    }
  },
  SET_NUMBER_OF_GUESSES(state, word) {
    state.guesses = word.length + 1;
  },
};

export const getters = {
  word: (state) => state.word,
  guesses: (state) => state.guesses,
  lengthOfWord: (state) => state.lengthOfWord,
  indexArray: (state) => state.indexArray,
  guessArray: (state) => state.guessArray,
};
