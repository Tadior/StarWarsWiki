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
  display: flex
  align-items: center
  gap: 25px
</style>
