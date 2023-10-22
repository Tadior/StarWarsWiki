<template>
  <!-- <div class="">{{ $route.path }}</div> -->
  <router-link v-if="imageUrl" :to="$route.path + '/' + id" class="wrapper">
    <div class="title">{{ name }}</div>
    <img class="img" :src="'http://localhost:5000/' + imageUrl" />
  </router-link>
</template>

<script>
export default {
  props: {
    imageUrl: String,
    name: String,
    id: Number,
  },
};
</script>

<style lang="sass" scoped>
.wrapper
	position: relative
	height: 200px
.title
	position: absolute
	left: 0
	right: 0
	bottom: 0
	margin: 0 auto
	text-align: center
	background: #000
	color: #fff
</style>
