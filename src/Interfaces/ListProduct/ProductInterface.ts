export interface Product {
    id: string,
    name: string,
    description: string,
    voltage: string,
    productBrand: ProductBrand,
    imageProduct: string
    imageProductURL: string
}

export interface ProductBrand {
    id: string
    name: string
}
