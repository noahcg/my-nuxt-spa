<template>
  <article>
    <app-nav />
    <main>
      <nuxt />
    </main>
    <app-footer />
  </article>
</template>

<script>
import AppNav from "~/components/AppNav.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    AppNav,
    AppFooter
  }
};
</script>


<style lang="scss">
@import "~assets/variables";
html {
  box-sizing: border-box;
  color: #eee;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 100%;
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
  background: #3d4e5d url("~assets/img/background@2x.png") no-repeat 0 0;
  background-attachment: fixed;
  background-position: 20% 0;
  background-size: cover;
  height: 100%;
  margin: 0;
  padding: 0;
}

article {
  background: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 15px;
  position: relative;

  &:before {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65));
    content: "";
    display: block;
    left: 0;
    height: 60px;
    position: absolute;
    top: -60px;
    width: 100%;
  }
}

main {
  flex-grow: 1;
  position: relative;
}

header,
main,
footer {
  flex-shrink: 0;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  float: right;
  width: 50%;
  height: 100vh;
}

.personal-meta img {
  display: block;
  margin: 0 auto 40px;
  width: 50%;
}

.personal-meta p {
  font-size: 14px;
  font-weight: 100;
  text-align: center;
}

.personal-meta ul {
  text-align: center;
  list-style-type: none;
  padding: 0;

  li {
    display: inline;
    font-size: 2em;
    font-weight: 100;
    margin-right: 10px;
    padding-right: 10px;

    &:last-child {
      margin: 0;
      padding: 0;
    }
  }
}

@media (min-width: 576px) {
  body {
    background-position: 0 0;
  }
}

@media (min-width: 768px) {
  body {
    background-size: contain;
  }
  .container {
    padding: 0 50px;
  }
}

@media (min-width: 992px) {
  article {
    background: none;
    float: right;
    padding: 0 15px;
    width: 50%;
  }
  main {
    // background: linear-gradient(#000 10%, blue 90%);
    // padding: 0 15px;
  }
}
</style>