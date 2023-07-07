<template>
  <div class="card shadow-sm mb-3 ds-card h-100">
    <img :src="'http://127.0.0.1:8001/' + urlImage" class="card-img-top img-fluid w-100" alt="..." />
    <div class="card-body">
      <h5 class="card-title limited-text">{{ title }}</h5>
      <div class="text-limit text-truncate">
        <p class="card-text text-limit">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    urlImage: {
      type: String,
      default: "",
      required: true,
    },
    title: {
      type: String,
      default: "",
      required: true,
    },
    description: {
      type: String,
      default: "",
      required: true,
    },
  },
});
</script>

<style scoped lang="scss" src="./Card.scss"></style>