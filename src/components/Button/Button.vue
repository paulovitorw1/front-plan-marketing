<template>
  <button @click="$emit('onClick')" :class="[
    setupButton,
  ]" class="d-inline-flex btn-background" :type="action">
    <div class="btn-fields">
      <div class="btn-text">
        {{ text }}
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
      default: "",
    },
    isDelete: {
      type: Boolean,
      default: false,
      required: false,
    },
    type: {
      type: String,
      default: "primary",
      required: true,
      validator(value: string): boolean {
        return ["primary", "secondary", "tertiary"].includes(value);
      },
    },
    action: {
      type: String,
      default: "button",
      required: false,
      validator(value: string): boolean {
        return ["button", "reset", "submit"].includes(value);
      },
    },
  },
  computed: {
    setupButton(): string | undefined {
      let className: string | undefined;
      if (this.type == "primary") {
        className = "button-primary btn btn-primary";
      } else if (this.type == "secondary") {
        className = "button-secondary btn btn-outline-primary";
      } else if (this.type == "tertiary") {
        className = "button-tertiary btn btn-tertiary";
      }

      return this.isDelete ? className + "-destructive" : className;
    },
  },
});
</script>

<style scoped lang="scss" src="./Button.scss"></style>
