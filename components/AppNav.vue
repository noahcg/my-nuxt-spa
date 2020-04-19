<template>
  <header>
    <p>
      Noah Glushien <br />
      <span>Front End Developer / Accessibility Advocate</span>
    </p>
    <nav>
      <ul>
        <li>
          <nuxt-link exact to="/">Projects</nuxt-link>
        </li>
        <li>
          <nuxt-link exact to="/about">About</nuxt-link>
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

  margin-top: 30px;
  position: relative;
  top: 0;

  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.75em;
    font-weight: 100;
    margin: 0.5em 0 0;

    span {
      font-size: 0.9rem;
    }
  }

  nav {
    align-items: center;
    display: flex;
    width: 100%;

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
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    nav {
      height: 100px;
      justify-content: flex-end;
      width: 50%;
    }
  }
}
@media (min-width: 992px) {
  // header {
  //   nav {

  //   }
  // }
}
</style>