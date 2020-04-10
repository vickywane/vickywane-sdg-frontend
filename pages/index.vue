<template>
  <div>
    <Header />
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
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

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
</style>
