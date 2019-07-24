<template>
  <div class="container">
    <app-nav />
    <main>
      <section class="personal-meta">
        <img src="~assets/img/photo.png" alt="Noah Glushien" />
        <p>Front End Developer + Accessibility Advocate</p>
        <ul>
          <li>
            <font-awesome-icon :icon="['fab', 'github']" />
          </li>
          <li>
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </li>
        </ul>
      </section>
      <nuxt />
    </main>
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

main {
  clear: right;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
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

@media (min-width: 768px) {
  .container {
    padding: 0 50px;
  }
}
</style>