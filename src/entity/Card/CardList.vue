<template>
  <div class="list">
    <card-item
      v-for="item in items"
      :name="item.name"
      :imageUrl="item.image"
      :id="item.id"
      v-bind:key="$route.path + item.id"
    />
  </div>
</template>

<script>
import CardItem from "./ui/CardItem.vue";
export default {
  components: {
    CardItem,
  },
  data() {
    return {};
  },
  props: {
    items: Array,
  },
  mounted() {
    console.log("Mounted");
  },
};
</script>

<style lang="sass" scoped>
.list
	display: grid
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
	gap: 30px
</style>
