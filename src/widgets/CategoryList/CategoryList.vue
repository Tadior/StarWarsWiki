<template>
  <div class="list">
    <category-item
      v-for="route in routes"
      v-bind:key="route.id"
      v-bind="route"
    />
  </div>
</template>
<script setup>
import CategoryItem from "./ui/CategoryItem";
</script>
<script>
import { ROUTE_LIST } from "@/data/ROUTES.js";
export default {
  data() {
    return {
      routes: ROUTE_LIST.slice(1, ROUTE_LIST.length),
    };
  },
};
</script>

<style lang="sass" scoped>
.list
  display: grid
  gap: 20px
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
</style>
