<template>
  <div class="container">
    <div class="stats">
      <div class="stat ac">AC: {{ getCharacter.stats.ac }}</div>
      <div class="stat speed">Speed: {{ getCharacter.stats.speed }}</div>
      <div class="stat hp">HP: {{ getCharacter.stats.hp }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MainStats",
  methods: {
    ...mapActions(["fetchCharacter"])
  },
  computed: mapGetters(["getBase", "getCharacter"]),
  created() {
    this.fetchCharacter();
  }
};
</script>

<style scoped>
.container {
  background-color: #ff6f61;
  height: 4rem;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 40rem;
  align-items: center;
  justify-items: center;
}
</style>
