<template>
  <div>
    <Header />
    <Home />
  </div>
</template>

<script lang="ts">
import Header from "../components/head.vue";
import Home from "./home/home.vue";

export default {
  name: "Index", 
  components: {
    Header,
    Home
  }
};
</script>
 