<template>
  <router-link class="item" :to="href" v-if="href !== exception">
    <img class="icon" :src="icon" />
    {{ label }}
  </router-link>
</template>

<script>
import { NOT_FOUND_ROUTE } from "@/data/ROUTES";

export default {
  data() {
    return {
      exception: NOT_FOUND_ROUTE,
    };
  },
  props: {
    label: String,
    href: String,
    icon: String,
  },
};
</script>

<style lang="sass" scoped>
.icon
  width: 60px
  background: #fff
  padding: 6px
  border-radius: 8px
.item
  display: flex
  align-items: center
  gap: 10px
  padding: 10px
  border: 2px solid #000
  border-radius: 5px
  font-size: 32px
  background: #fff
  text-decoration: none
  color: #2e557c
  transition: all ease .7s
  &:hover
    background: 	#2e557c
    color: #fff
    border-color: #fff
</style>
