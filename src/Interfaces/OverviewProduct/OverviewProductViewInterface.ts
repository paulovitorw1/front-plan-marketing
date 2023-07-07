import {Product} from "@/Interfaces/ListProduct/ProductInterface"
export interface OverviewProductViewInterface {
    getProduct(id: string): void
    setProduct(product: Product): void
    showError(message: string): void;
}

export interface OverviewProductPresenterInterface {
    getProduct(id: string): void
}