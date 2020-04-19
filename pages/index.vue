<template>
  <section class="content">
    <h1>Projects</h1>
    <section class="work-related">
      <h2>Recent Work</h2>
      <ul>
        <li>
          <h3>Early Warning Project</h3>
          <p>
            The Early Warning Project, a first-of-its-kind public system, is a
            joint initiative of the Simon-Skjodt Center for the Prevention of
            Genocide at the United States Holocaust Memorial Museum and the
            Dickey Center for International Understanding at Dartmouth College.
            This project aims to provide governments, civil society groups, and
            other influential actors early and reliable warnings of mass
            atrocities and, as a result, greater opportunities to take
            preventive action.
          </p>
          <a
            class="default-link"
            href="https://earlywarningproject.ushmm.org/"
            target="_blank"
            >Project Link</a
          >
        </li>
        <li>
          <h3>Americans and the Holocaust</h3>
          <p>
            This online exhibition examines the motives, pressures, and fears
            that shaped Americans’ responses to Nazism, war, and genocide.
          </p>
          <a
            class="default-link"
            href="https://exhibitions.ushmm.org/americans-and-the-holocaust/main"
            target="_blank"
            >Project Link</a
          >
        </li>
      </ul>
    </section>
    <section class="personal-projects">
      <h2>Personal Github Repos</h2>
      <p>These are my personal projects</p>
      <ul>
        <li v-for="project in githubProjects" :key="project.id">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <a class="default-link" :href="project.html_url">Repo Link</a>
        </li>
      </ul>
    </section>
  </section>
</template>



<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["githubProjects"])
  },
  mounted() {
    this.$store.dispatch("getGithubProjects");
  }
};
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