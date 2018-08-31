<template>
  <div>
    <TheNavBar/>
    <div class="container">
      <nuxt/>
    </div>

  </div>
</template>

<script>
  import TheNavBar from "../components/TheNavBar";

  export default {
    components: {
      TheNavBar
    }
  }
</script>

<style scoped>
</style>
