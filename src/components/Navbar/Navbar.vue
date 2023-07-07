<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-0 mb-5 shadow-sm pb-0 pt-3 bg-body">
    <div class="container">
      <ul class="navbar-nav">
        <div class="w-25 pb-3 me-4">
          <img :src="require('@/assets/logo.png')" alt="logo" class="img-fluid w-100" />
        </div>
      </ul>
    </div>
  </nav>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
    };
  },


});
</script>
<style lang="scss" src="./Navbar.scss" />