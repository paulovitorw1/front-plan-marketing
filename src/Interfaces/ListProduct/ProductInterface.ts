export interface Product {
    id: string,
    name: string,
    description: string,
    voltage: string,
    productBrand: ProductBrand,
    imageProduct: string
}

export interface ProductBrand {
    id: string
    name: string
}
