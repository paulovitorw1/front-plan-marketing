<template>
  <div class="row">
    <ds-modal ref="modal" :title="titleModal" @didtappedButtonPrimary="saveProduct"
      @didTappedButtonSecondaryOrCloseModal="resetForm">
      <p class="message-error" v-show="messageError">
        {{ messageError }}
      </p>
      <form action="#" enctype="multipart/form-data">
        <div class="row">
          <div class="col-12 col-sm-6 mb-3">
            <label for="inputEmail4" class="form-label">Nome do produto</label>
            <input type="text" class="form-control" placeholder="Digite o nome do produto" v-model="product.name" />
          </div>
          <div class="col-12 col-sm-6 mb-3">
            <label for="inputEmail4" class="form-label">Modelo do produto</label>
            <select class="form-select" aria-label="Selecione a marca do produto" v-model="product.productBrand.id">
              <option selected value="">Selecione o modelo do produto</option>
              <option v-for="brand in productsBrand" :key="brand.id" :value="brand.id">
                {{ brand.name }}
              </option>
            </select>
          </div>
          <div class="col-12 col-sm-6 mb-3">
            <label for="selectValge" class="form-label">Tensão do produto</label>
            <select class="form-select form-control" aria-placeholder="Selecione o curso" v-model="product.voltage">
              <option value="">Selecione tensão do produto</option>
              <option value="110V">110V</option>
              <option value="220V">220V</option>
            </select>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12 mb-3">
            <div class="mb-3">
              <label for="inputEmail4" class="form-label">URL da imagem do produto</label>
              <input class="form-control" type="file" id="formFile" accept=".png, .jpeg, .jpg" @change="handleFileChange">
            </div>
          </div>
          <div class="col-12 mt-3">
            <label for="inputEmail4" class="form-label">Descrição do produto</label>
            <textarea class="form-control" placeholder="Digite a descrição do produto" id="floatingTextarea2"
              v-model="product.description" style="height: 100px"></textarea>
          </div>
        </div>
      </form>
    </ds-modal>
    <div class="col">
      <h3>Listagem de produtos</h3>
      <p class="my-3">Visualize os produtos que estão disponivel na plataforma.</p>
    </div>
    <div class="col">
      <ds-button class="float-end" type="primary" text="Criar produto" @click="showModal" @onClick="isEditing = false" />
    </div>
  </div>
  <div class="row">
    <div class="col-6 col-sm-2" v-for="item in products" :key="item.id">
      <div class="row h-100">
        <div class="col-12">
          <ds-card :title="item.name" :description="item.description" :urlImage="item.imageProduct"
            @click="redirectForProductOverview(item.id)" />
        </div>
        <div class="col-12">
          <div class="d-flex justify-content-center mt-2">
            <ds-button text="Editar" type="tertiary" @click="getProductsById(item.id)" />
            <ds-button text="Excluir" type="tertiary" :isDelete="true" @click="deleteProduct(item.id)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ListProductViewInterface } from "@/Interfaces/ListProduct/ListProductViewInterface";
import { Product, ProductBrand } from "@/Interfaces/ListProduct/ProductInterface";
import { defineComponent } from "vue";
import { ListProductPresenter } from "./ListProductPresenter";

export default defineComponent({
  data() {
    return {
      presenter: null as ListProductPresenter | null,
      product: {
        id: "",
        name: "",
        description: "",
        voltage: "",
        productBrand: {
          id: "",
          name: ""
        },
        imageProduct: ""
      } as Product,
      productsBrand: [] as ProductBrand[],
      messageError: "" as string | null,
      products: [] as Product[],
      isEditing: false as boolean
    };
  },
  mounted() {
    this.presenter = new ListProductPresenter(this as ListProductViewInterface);
    this.getProducts()
    this.getProductBrands()
  },
  computed: {
    titleModal(): string {
      return this.isEditing ? "Editar Produto" : "Adicionar Produto";
    }
  },
  methods: {
    saveProduct(): void {
      if (this.product.id && this.isEditing) {
        this.updateProduct()
      } else {
        this.createProduct()
      }
    },
    getProducts(): void {
      this.presenter?.getProducts()
    },
    getProductsById(id: string): void {
      this.isEditing = true
      this.showModal()
      this.presenter?.getProductsById(id)
    },
    getProductBrands(): void {
      this.presenter?.getProductBrands()
    },
    setProductsView(products: Product[]): void {
      this.products = products
    },
    setProductByIdView(products: Product): void {
      console.log(products);
      this.product = products
    },
    setProductsBrandsView(brands: ProductBrand[]): void {
      this.productsBrand = brands
    },
    showModal(): void {
      const modalRef = this.$refs.modal as { showModal: () => void };
      modalRef.showModal();
    },
    showHide(): void {
      const modalRef = this.$refs.modal as { hideModal: () => void };
      modalRef.hideModal();
    },
    createProduct(): void {
      this.messageError = null
      if (!this.presenter) return;
      this.presenter.createProduct(this.product)
    },
    updateProduct(): void {
      this.messageError = null
      if (!this.presenter) return;
      this.presenter.updateProduct(this.product)
    },
    deleteProduct(id: string): void {
      if (!this.presenter) return;
      this.presenter.deleteProduct(id)
    },
    productActionSuccess(message: string): void {
      this.showHide()
      this.resetForm()
      alert(message)
      this.$router.go(0)
    },
    showError(message: string): void {
      this.messageError = message
    },
    handleFileChange(event: any): void {
      const file = event.target.files[0];
      this.product.imageProduct = file
    },
    resetForm(): void {
      this.product = {
        id: "",
        name: "",
        description: "",
        voltage: "",
        productBrand: {
          id: "",
          name: ""
        },
        imageProduct: ""
      };
    },
    redirectForProductOverview(id: string): void {
      this.$router.push({
        name: "OverviewProduct",
        params: { id: id },
      });
    },
  }
});
</script>
<style  lang="scss" src="./ListProduct.scss" />
