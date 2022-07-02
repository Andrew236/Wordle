export default {
  // In place of an API that returns a list of words for me :)
  async getWords() {
    try {
      const response = await require("@/data/MockData.json");
      return response;
    } catch {
      console.log("error fetching words");
    }
  },
};
