<template>
  <AppTitle />
</template>

<script>
import AppTitle from "../components/AppTitle";
import EntityService from "@/services/EntityService";
export default {
  name: "HomeView",

  components: {
    AppTitle,
  },
  async beforeMount() {
    const words = await EntityService.getWords();
    console.log("words", words);
  },
};
</script>
