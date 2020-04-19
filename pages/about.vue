<template>
  <section class="content">
    <h1>About me</h1>
    <p>
      Writing about yourself is actually quite difficult. I'm constantly trying
      to decide what to say and then editing and re-editing in my own mind. That
      results in nothing being written at all. The trick is to find something I
      think other people will find worthwhile to know.
    </p>
    <p>
      To start, I'm a Front End Developer and have been working on websites in
      various roles for over 16 years now. I started out as a designing creating
      web layouts and learning how to animate interface elements in Flash. And
      that was before Adobe acquired Macromedia. Who else remembers those days?
    </p>
    <p>
      From there I started learning how to write the HTML and CSS for the
      layouts I was designing. I'm a curious person and
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea non odit
      amet adipisci inventore quam officiis, voluptatem esse quis repudiandae
      consequuntur obcaecati voluptas rem suscipit neque, ex, ratione ab!
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/mixins";

.title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0;
}
h1 {
  @include page-title;
}
</style>