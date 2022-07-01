export const namespaced = true;

export const state = {
  word: null,
  guesses: 5,
};

export const actions = {
  setWordToGuess({ commit }, word) {
    commit("SET_WORD_TO_GUESS", word);
  },
};

export const mutations = {
  SET_WORD_TO_GUESS(state, word) {
    state.word = word;
  },
};

export const getters = {
  wordToGuess: (state) => state.wordToGuess,
};
