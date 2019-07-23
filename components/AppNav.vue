<template>
  <header>
    <section></section>
    <nav>
      <ul>
        <li>
          <nuxt-link exact to="/">Main</nuxt-link>
        </li>
        <li>
          <nuxt-link exact to="/projects">Projects</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/variables";

header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  section {
    grid-area: 1 / 1 / 2 / 13;
  }
  nav {
    align-items: center;
    display: flex;
    grid-area: 1 / 8 / 2 / 13;
    height: 100px;
    justify-content: center;

    ul {
      padding-left: 0;

      li {
        display: inline-block;
        margin-right: 10px;
      }
    }
  }
}
</style>