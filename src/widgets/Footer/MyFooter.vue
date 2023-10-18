<template>
  <footer>
    <my-container>
      <a class="link" href="">
        <githubIcon />
      </a>
    </my-container>
  </footer>
</template>

<script>
import githubIcon from "@/assets/icons/octocat.svg";
export default {
  components: { githubIcon },
};
</script>

<style lang="sass" scoped>
.link
  height: 40px
</style>
