<template>
  <footer
    class="v-footer v-sheet v-sheet--tile theme--light"
    data-booted="true"
  >
    <div class="spacer"></div>
    <ul>
      <li>
        <font-awesome-icon :icon="['fab', 'github']" />
      </li>
      <li>
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </li>
    </ul>
    <div>© 2020</div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    links: ["About", "Projects"]
  })
};
</script>
<style lang="scss" scoped>
@import "~assets/variables";

footer {
  align-items: center;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // margin-top: 30px;
  top: 0;
  width: 100%;
}
</style>

