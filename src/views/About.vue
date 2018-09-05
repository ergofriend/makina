<template>
  <div class="about">
    <div class="box">
      <div class="media">
        <figure class="image is-64x64 media-left">
          <img class="is-rounded" :src="user.photoURL">
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ user.displayName }} </strong> <small>{{ user.email }} </small>
              <br>
              {{ user.uid }}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
      <strong>Makina</strong> by <a href="https://twitter.com/ergofriend">ergofriend</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "about",
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  components: {}
};
</script>
<style scoped>
.box {
  margin: 5% 20%;
}
</style>
