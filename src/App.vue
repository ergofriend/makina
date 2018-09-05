<template>
  <div id="app">
    <Navigation />
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";

export default {
  name: "home",
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat");
#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
