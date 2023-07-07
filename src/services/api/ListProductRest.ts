import { Product, ProductBrand } from "@/Interfaces/ListProduct/ProductInterface";
import { ResponseData } from "@/Interfaces/ResponseAPIInterface";
import { api } from "../config";
export class ListProductRest {
    getProductsBrands(): Promise<ResponseData<ProductBrand[]>> {
        const url = "brand"
        return api.get(url).then(response => response.data);
    }

    getProducts(): Promise<ResponseData<Product[]>> {
        const url = "product"
        return api.get(url).then(response => response.data);
    }

    getProductsById(id: string): Promise<ResponseData<Product>> {
        const url = `product/${id}/edit`
        return api.get(url).then(response => response.data);
    }

    createProduct(product: FormData): Promise<Product> {
        const url = "product"
        return api.post(url, product).then(response => response.data);
    }

    updateProduct(product: FormData, id: string): Promise<Product> {
        const url = `product/${id}`
        return api.patch(url, product).then(response => response.data);
    }
    deleteProductsById(id: string): Promise<ResponseData<void>> {
        const url = `product/${id}`
        return api.delete(url).then(response => response.data);
    }
}