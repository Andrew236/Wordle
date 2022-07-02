export const namespaced = true;

export const state = {
  word: null,
  guesses: 6,
};

export const actions = {
  setWordToGuess({ commit }, words) {
    commit("SET_WORD_TO_GUESS", words);
  },
};

export const mutations = {
  SET_WORD_TO_GUESS(state, words) {
    state.word = words[Math.floor(Math.random() * words.length)];
  },
};

export const getters = {
  word: (state) => state.word,
  guesses: (state) => state.guesses,
};
