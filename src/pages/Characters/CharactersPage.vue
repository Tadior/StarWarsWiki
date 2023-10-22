<template>
  <div class="page">
    <div v-if="isLoading" class="loading">Loading</div>
    <card-list :items="apiData" />
  </div>
</template>

<script setup>
import CardList from "@/entity/Card/CardList.vue";
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      apiData: [],
      isLoading: true,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        `http://localhost:5000${this.$route.path}`
      );
      console.log(response);
      this.apiData = response.data;
      this.isLoading = false;
    } catch (e) {
      alert("Error");
    }
  },
};
</script>

<style lang="sass" scoped>
.page
  padding: 20px 0
</style>
