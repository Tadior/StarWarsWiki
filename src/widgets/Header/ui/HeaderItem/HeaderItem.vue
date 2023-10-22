<template>
  <router-link class="link" v-if="href !== exception" :to="href">{{
    label
  }}</router-link>
</template>
<!-- <script setup>
import NOT_FOUND_ROUTE from "@/data/ROUTES";
</script> -->
<script>
import { NOT_FOUND_ROUTE } from "@/data/ROUTES.js";
export default {
  data() {
    return {
      exception: NOT_FOUND_ROUTE,
    };
  },
  props: {
    id: Number,
    label: String,
    href: String,
    icon: String,
  },
};
</script>

<style lang="sass" scoped>
.link
  padding: 5px
  color: #fff
  text-decoration: none
  border: 1px solid #fff
  transition: all ease .5s
  &:hover
    background: #2e557c
.router-link-exact-active
  background: #2e557c
  pointer-events: none
</style>
