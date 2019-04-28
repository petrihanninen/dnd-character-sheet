<template>
  <div id="app">
    <MainStats />
    <router-view />
    <MainNav />
  </div>
</template>

<script>
import MainStats from "@/components/MainStats.vue";
import MainNav from "@/components/MainNav.vue";

export default {
  components: { MainStats, MainNav }
};
</script>

<style>
body {
  margin: 5rem 0;
  width: 100vw;
  max-width: 800px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

a {
  color: #fff;
  text-decoration: none;
}
</style>
