<template>
  <router-link v-if="href !== exception" :to="href">{{ label }}</router-link>
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

<style lang="sass" scoped></style>
