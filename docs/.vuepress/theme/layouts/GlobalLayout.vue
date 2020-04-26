<template>
  <div>
    <Nav />
    <component :is="layout"></component>
  </div>
</template>

<style lang="stylus">
@import '../styles/main.styl';
</style>

<script>
import Nav from "@theme/components/Nav.vue";
import PostsLayout from "@theme/layouts/PostsLayout.vue";
import PostLayout from "@theme/layouts/PostLayout.vue";

export default {
  name: "GlobalLayout",
  components: {
    Nav,
    PostLayout,
    PostsLayout
  },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || "PostsLayout";
    }
  }
};
</script>
