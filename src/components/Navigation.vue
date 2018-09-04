<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <Authentication />
    </div>
</template>
<script>
// @ is an alias to /src
import Authentication from "@/components/Authentication.vue";

export default {
  name: "navigation",
  components: {
    Authentication
  }
};
</script>
<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #3765ff;
    }
  }
}
</style>
