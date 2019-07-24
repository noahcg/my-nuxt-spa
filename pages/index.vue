<template>
  <main>
    <section class="background">Image Goes Here</section>
    <section class="content">
      <h1>About me</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea non odit amet adipisci inventore quam officiis, voluptatem esse quis repudiandae consequuntur obcaecati voluptas rem suscipit neque, ex, ratione ab!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea non odit amet adipisci inventore quam officiis, voluptatem esse quis repudiandae consequuntur obcaecati voluptas rem suscipit neque, ex, ratione ab!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea non odit amet adipisci inventore quam officiis, voluptatem esse quis repudiandae consequuntur obcaecati voluptas rem suscipit neque, ex, ratione ab!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea non odit amet adipisci inventore quam officiis, voluptatem esse quis repudiandae consequuntur obcaecati voluptas rem suscipit neque, ex, ratione ab!</p>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/mixins";
main {
  clear: right;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
}

.title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
}
h1 {
  @include page-title;
}
</style>