<template>
  <section class="content">
    <h1>Projects</h1>
    <section class="work-related">
      <h2>Work Related</h2>
      <ul>
        <li>
          <h3>Early Warning Project</h3>
          <p>The Early Warning Project, a first-of-its-kind public system, is a joint initiative of the Simon-Skjodt Center for the Prevention of Genocide at the United States Holocaust Memorial Museum and the Dickey Center for International Understanding at Dartmouth College. This project aims to provide governments, civil society groups, and other influential actors early and reliable warnings of mass atrocities and, as a result, greater opportunities to take preventive action.</p>
          <a href="https://earlywarningproject.ushmm.org/" target="_blank">Link to project</a>
        </li>
        <li>
          <h3>Americans and the Holocaust</h3>
          <p>This online exhibition examines the motives, pressures, and fears that shaped Americans’ responses to Nazism, war, and genocide.</p>
          <a
            href="https://exhibitions.ushmm.org/americans-and-the-holocaust/main"
            target="_blank"
          >Link to project</a>
        </li>
      </ul>
    </section>
    <section class="personal-projects">
      <h2>Personal Github Repos</h2>
      <p>These are my personal projects</p>
      <ul>
        <li>
          <h3>Project Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea quos suscipit culpa magni eos deserunt vero numquam dolorem harum dicta cumque similique, quasi sequi doloremque ducimus. Doloremque, iusto doloribus!</p>
          <a href>Link to project</a>
        </li>
        <li>
          <h3>Project Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea quos suscipit culpa magni eos deserunt vero numquam dolorem harum dicta cumque similique, quasi sequi doloremque ducimus. Doloremque, iusto doloribus!</p>
          <a href>Link to project</a>
        </li>
        <li>
          <h3>Project Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea quos suscipit culpa magni eos deserunt vero numquam dolorem harum dicta cumque similique, quasi sequi doloremque ducimus. Doloremque, iusto doloribus!</p>
          <a href>Link to project</a>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/mixins";
h1 {
  @include page-title;
}
.work-related,
.personal-projects {
  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 40px;
    }
  }
  h2,
  h3 {
    margin-bottom: 0;
  }

  h3 + p {
    font-weight: 300;
    margin-bottom: 5px;
    margin-top: 0;
  }
}
</style>