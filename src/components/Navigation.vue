<template>
    <div id="nav">
      <nav class="navbar is-transparent" v-bind:class="{'is-fixed-bottom':menuPosition}">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <img src="./../assets/radar.png">
          </router-link>
          <div class="navbar-burger burger " v-bind:class="{ 'is-active': menuActive }" v-on:click="menuToggle()" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarExampleTransparentExample" class="navbar-menu" v-bind:class="{ 'is-active': menuActive }">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/">Home</router-link>
            <router-link class="navbar-item" to="/about">About</router-link>
          </div>
          <div class="navbar-end">
            <Authentication />
          </div>
        </div>
      </nav>
    </div>
</template>
<script>
// @ is an alias to /src
import Authentication from "@/components/Authentication.vue";

export default {
  name: "navigation",
  components: {
    Authentication
  },
  created() {
    if (window.innerWidth < 1024) {
      this.menuPosition = !this.menuPosition;
    }
  },
  data() {
    return {
      menuActive: false,
      menuPosition: false
    };
  },
  methods: {
    menuToggle() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>
<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: rgb(85, 85, 85);
    &.router-link-exact-active {
      color: hsl(217, 71%, 53%);
    }
  }
}
</style>
