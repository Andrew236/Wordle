const axios = require("axios").default;

export default {
  async getWords() {
    try {
      return axios.get("https://api.frontendexpert.io/api/fe/wordle-words");
    } catch {
      console.log("error fetching words");
    }
  },
};
