<template>
  <div class="container">
    <div class="links">
      <router-link to="/">Stats</router-link>
      <router-link to="/actions">On Turn</router-link>
      <router-link to="/reactions">Off Turn</router-link>
      <router-link to="/equipment">Gear</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background-color: #ff6f61;
  height: 4rem;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-width: 40rem;
  align-items: center;
  justify-items: center;
}
</style>
