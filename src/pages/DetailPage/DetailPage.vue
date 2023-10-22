<template>
  <div class="wrapper">
    <div class="left">
      {{ name }}
      <img class="img" :src="imgPath" alt="" />
    </div>
    <div class="">
      <div
        class="info"
        v-for="(value, property) in this.infoData"
        v-bind:key="property"
      >
        {{ property + ": " + value }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_API_URL } from "@/data/CONSTS.js";
export default {
  data() {
    return {
      infoData: {},
      name: "",
      imgPath: BASE_API_URL,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(BASE_API_URL + this.$route.path);
      this.name = response.data.name;
      this.imgPath = this.imgPath + "/" + response.data.image;
      /* eslint-disable */
      const excludeFields = ({ name, image, ...rest }) => rest;
      this.infoData = excludeFields(response.data);
      console.log(this.imgPath);
    } catch (e) {
      console.log("error");
    }
  },
};
</script>

<style lang="sass" scoped>
.wrapper
  display: grid
  grid-template-columns: minmax(200px, 300px) 1fr
  gap: 30px
  align-items: center
  padding-top: 20px
.left
  display: flex
  flex-direction: column
.img
  margin-top: 10px
</style>
