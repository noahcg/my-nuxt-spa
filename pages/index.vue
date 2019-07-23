<template>
  <main>
    <section class="background">Image Goes Here</section>
    <section class="content">
      <h1>Hello</h1>
      <p>Information about me will go here</p>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/variables";
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;

  .background {
    grid-area: 1 / 1 / 2 / 2;
  }
  .content {
    grid-area: 1 / 2 / 2 / 3;
  }
}
h1 {
  font-family: $page-title-font;
  font-size: $page-title-size;
  font-weight: $page-title-weight;
  line-height: $page-title-lh;
}
</style>