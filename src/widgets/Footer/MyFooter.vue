<template>
  <footer class="footer">
    <my-container>
      <a class="link" :href="profileLink" target="_blank">
        <githubIcon class="icon" />
      </a>
    </my-container>
  </footer>
</template>

<script>
import githubIcon from "@/assets/icons/octocat.svg";
import { GITHUB_PROFILE } from "@/data/CONSTS";
export default {
  components: { githubIcon },
  data() {
    return {
      profileLink: GITHUB_PROFILE,
    };
  },
};
</script>

<style lang="sass" scoped>
.icon
  height: 40px
  padding: 3px
  border-radius: 50%
  background: #fff
  transition: all ease .5s
  &:hover
    transform: translateY(-5px)
    background: #2e557c
.footer
  padding: 5px 0
  background: rgba(0, 0, 0, .9)
</style>
