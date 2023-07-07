<template>
  <div class="modal fade" id="dsModal" ref="modalElement" tabindex="-1" aria-labelledby="DSModalLabel" aria-hidden="true" data-bs-backdrop="static">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="DSModalLabel">{{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="didTappedButtonSecondaryOrCloseModal()"></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <ds-button class="me-3" :text="textButtonSecondary" type="secondary" data-bs-dismiss="modal" @click="didTappedButtonSecondaryOrCloseModal()"/>
          <ds-button :text="textButtonPrimary" type="primary" @on-click="didtappedButtonPrimary()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Modal } from "bootstrap";
export default defineComponent({
  emits: ["didtappedButtonPrimary", "didTappedButtonSecondaryOrCloseModal"],
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    textButtonPrimary: {
      type: String,
      required: false,
      default: "Salvar",
    },
    textButtonSecondary: {
      type: String,
      required: false,
      default: "Fechar",
    },
  },
  data() {
    return {
      myModal: null as Modal | null,
    };
  },
  mounted() {
    this.myModal = new Modal(this.$refs.modalElement as HTMLElement);
  },
  methods: {
    showModal(): void {
      if (this.myModal) {
        this.myModal.show();
      }
    },
    hideModal(): void {
      if (this.myModal) {
        this.myModal.hide();
      }
    },
    didtappedButtonPrimary(): void {
      this.$emit("didtappedButtonPrimary")
    },
    didTappedButtonSecondaryOrCloseModal() {
      this.$emit("didTappedButtonSecondaryOrCloseModal")
    }
  },
});
</script>