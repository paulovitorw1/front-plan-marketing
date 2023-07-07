export interface Product {
    id: string,
    name: string,
    description: string,
    voltage: string,
    productBrand: ProductBrand,
}

export interface ProductBrand {
    id: string
    name: string
}
