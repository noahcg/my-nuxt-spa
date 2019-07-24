<template>
  <header>
    <p>Noah Glushien</p>
    <nav>
      <ul>
        <li>
          <nuxt-link exact to="/">About</nuxt-link>
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
  align-items: center;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: row;
  float: right;
  justify-content: space-between;
  width: 100%;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.75em;
    font-weight: 100;
  }

  nav {
    align-items: center;
    display: flex;
    height: 100px;
    justify-content: flex-end;
    width: 50%;

    ul {
      padding-left: 0;

      li {
        display: inline-block;
        font-weight: 300;
        margin-right: 10px;
      }
    }
  }
}

@media (min-width: 768px) {
  header {
    width: 50%;
  }
}
</style>