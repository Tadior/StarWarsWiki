<template>
  <div class="App">
    <my-header />
    <main class="main">
      <my-container class="container--dark">
        <router-view />
      </my-container>
    </main>
    <my-footer />
  </div>
</template>

<script setup>
import MyHeader from "@/widgets/Header/MyHeader.vue";
import MyFooter from "@/widgets/Footer/MyFooter.vue";
</script>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 5,
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },
  },
};
</script>

<style lang="sass">
@import "@/assets/base.sass"
.App
  display: grid
  grid-template-rows: auto 1fr auto
  background: url("../public/star-wars-bg.jpg") no-repeat 65% top fixed
  height: 100%

.container--dark
  background: rgba(0, 0, 0, .7)
  height: 100%
  border-radius: 30px
</style>
