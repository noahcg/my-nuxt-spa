<template>
  <div>
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
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  background: #111;
  color: #eee;
}

a,
a:visited,
a:active {
  color: $link-color;
  font-family: $link-font;
  text-decoration: none;
}
</style>