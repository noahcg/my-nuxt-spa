<template>
  <div class="container">
    <app-nav />
    <nuxt />
  </div>
</template>

<script>
import AppNav from "~/components/AppNav.vue";

export default {
  components: {
    AppNav
  }
};
</script>


<style lang="scss">
@import "~assets/variables";
html {
  box-sizing: border-box;
  background: #111;
  color: #eee;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

a,
a:visited,
a:active {
  color: $link-color;
  font-family: $link-font;
  text-decoration: none;
}

body {
  margin: 0;
  padding: 0;
}

.container {
  padding: 0 10px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 50px;
  }
}
</style>