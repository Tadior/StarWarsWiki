<template>
  <header>
    <my-container>
      <div class="list">
        <header-item
          v-for="info in headerInfo"
          v-bind="info"
          v-bind:key="info.id"
        />
      </div>
    </my-container>
  </header>
</template>

<script>
import { ROUTE_LIST } from "@/data/ROUTES";

export default {
  components: {
    HeaderItem: () => import("./ui/HeaderItem/HeaderItem.vue"),
  },
  data() {
    return {
      headerInfo: ROUTE_LIST,
    };
  },
};
</script>

<style lang="sass" scoped>
.list
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(100px, 150px))
  // display: flex
  // align-items: center
  // gap: 25px
  background: rgba(0, 0, 0, .7)
</style>
