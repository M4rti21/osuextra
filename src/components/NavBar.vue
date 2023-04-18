<template>
  <nav class="d-flex flex-row gap-5 align-items-center justify-content-center">
      <router-link class="nav-item" to="/">Home</router-link>
      <router-link class="nav-item" to="/info">Info</router-link>
      <router-link class="nav-item" to="/compare">Compare</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  nav {
    height: 60px;
    background-color: #b03c6c;
  }
  nav * {
    text-decoration: none;
    font-size: 1.5rem;
    color: #ffffff;
    transition: .1s;
  }
  nav *:hover {
    color: #dddddd;
    transform: scale(1.1);
  }
</style>