<template>
  <div>
    <div class="logo">
      <img class="logo__img" :src="LogoImg" alt="logo" />
    </div>
    <category-list />
  </div>
</template>

<script setup>
import CategoryList from "@/widgets/CategoryList/CategoryList.vue";
import LogoImg from "@/assets/logo.png";
</script>

<script>
export default {};
</script>

<style lang="sass" scoped>
.logo
  display: flex
  justify-content: center
  &__img
    max-width: 500px
    width: 100%
</style>
