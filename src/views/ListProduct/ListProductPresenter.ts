import { ListProductPresenterInterface, ListProductViewInterface } from "@/Interfaces/ListProduct/ListProductViewInterface";
import { Product } from "@/Interfaces/ListProduct/ProductInterface";
import { ListProductRest } from "@/services/api/ListProductRest";

export class ListProductPresenter implements ListProductPresenterInterface {
    private view: ListProductViewInterface;
    private _service: ListProductRest

    constructor(view: ListProductViewInterface) {
        this.view = view;
        this._service = new ListProductRest();
    }
    getProductBrands(): void {
        this._service
            .getProductsBrands()
            .then((brands) => {
                this.view.setProductsBrandsView(brands.data)
            })
            .catch((error) => {
                this.view.showError(error);
                throw error;
            });
    }

    getProducts(): void {
        this._service
            .getProducts()
            .then((products) => {
                this.view.setProductsView(products.data)
            })
            .catch((error) => {
                this.view.showError(error);
                throw error;
            });
    }

    getProductsById(id: string): void {
        this._service
            .getProductsById(id)
            .then((products) => {
                this.view.setProductByIdView(products.data)
            })
            .catch((error) => {
                this.view.showError(error);
                throw error;
            });
    }

    createProduct(product: Product): void {
        if (!this.validationForm(product)) return;
        this._service
            .createProduct(this.sendProductAPI(product))
            .then(() => {
                this.view.productActionSuccess("Produto criado com sucesso!")
            })
            .catch((error) => {
                this.view.showError(error);
                throw error;
            });
    }

    updateProduct(product: Product): void {
        if (!this.validationForm(product, true)) return;
        this._service
            .updateProduct(this.sendProductAPI(product), product.id)
            .then(() => {
                this.view.productActionSuccess("Produto atualizado com sucesso!")
            })
            .catch((error) => {
                this.view.showError(error);
                throw error;
            });
    }

    deleteProduct(id: string): void {
        this._service
            .deleteProductsById(id)
            .then(() => {
                this.view.productActionSuccess("Produto deletado com sucesso!")
            })
            .catch((error) => {
                this.view.showError(error);
                throw error;
            });
    }

    sendProductAPI(product: Product): FormData {
        const formData = new FormData();
        formData.append('id', product.id);
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('voltage', product.voltage);
        formData.append('productBrand', product.productBrand.id);
        formData.append('imageProduct', product.imageProduct);
        formData.append('imageProductURL', product.imageProductURL);
        return formData
    }

    validationForm(product: Product, isEditing = false): boolean {
        const { name, description, voltage, productBrand, imageProduct } = product;
        if (!name || !description || !voltage || !productBrand || (!isEditing && !imageProduct)) {
            this.view.showError("Preencha todos os campos obrigatórios");
            return false;
        }
        return true;
    }
}