<template>
  <h3>{{ product.name }}</h3>
  <p class="message-error" v-show="messageError">
    {{ messageError }}
  </p>
  <div class="row mb-4">
    <div class="col-12 col-md-8 pe-0 image-product">
      <img :src="'http://127.0.0.1:8001/' + product.imageProduct" class="d-block w-100 img-fluid rounded-start border" alt="..." />
    </div>
    <div class="col-12 col-md-4 ps-0 d-flex align-items-stretch" id="card-value">
      <div class="card card-value w-100 border-start-0 rounded-start-0">
        <div class="card-body">
          <h5 class="card-title">R$ 999,00</h5>
          <p class="card-subtitle mb-2 text-muted">até 6x de R$ 166,50</p>
          <p class="card-subtitle mb-2 text-muted">mais formas de pagamento</p>
          <h6>Descrição do produto</h6>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item mb-5">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
          aria-expanded="true" aria-controls="collapseOne">
          <strong> Ficha técnica </strong>
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <span class="data-sheet mb-2">Marca do produto: <strong>{{ product.productBrand.name }}</strong></span> <br>
          <span class="data-sheet mb-2">Tensão do produto: <strong>{{ product.voltage }}</strong></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { OverviewProductPresenter } from "./OverviewProductPresenter";
import { OverviewProductViewInterface } from "@/Interfaces/OverviewProduct/OverviewProductViewInterface";
import { Product } from "@/Interfaces/ListProduct/ProductInterface";
export default defineComponent({
  data() {
    return {
      presenter: null as OverviewProductPresenter | null,
      product: {
        id: "",
        name: "",
        description: "",
        voltage: "",
        productBrand: {
          id: "",
          name: ""
        }
      } as Product,
      messageError: "" as string | null,
    };
  },
  mounted() {
    this.presenter = new OverviewProductPresenter(this as OverviewProductViewInterface);
    this.getProduct(this.$route.params.id as string);
  },
  methods: {
    getProduct(id: string): void {
      if (!this.presenter) return;
      this.presenter.getProduct(id)
    },
    setProduct(product: Product): void {
      this.product = product
    },
    showError(message: string): void {
      this.messageError = message
    },
  },
});
</script>
<style scoped lang="scss" src="./OverviewProduct.scss" />
