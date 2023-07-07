import { Product, ProductBrand } from "./ProductInterface";

export interface ListProductViewInterface {
    getProducts(): void;
    getProductBrands(): void;
    setProductsView(products: Product[]): void
    setProductByIdView(products: Product): void;
    setProductsBrandsView(products: ProductBrand[]): void
    createProduct(): void
    updateProduct(): void
    deleteProduct(id: string): void;
    productActionSuccess(message: string): void;
    showModal(): void;
    showError(message: string): void;
    resetForm(): void;
    redirectForProductOverview(id: string): void;
}

export interface ListProductPresenterInterface {
    getProducts(): void;
    getProductsById(id: string): void;
    createProduct(product: Product): void;
    updateProduct(product: Product): void;
    deleteProduct(id: string): void;
    getProductBrands(): void
    sendProductAPI(product: Product): FormData
    validationForm(product: Product): void;
}