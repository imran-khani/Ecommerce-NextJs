export interface ProductTypes {
    _id: string;
    price: number;
    name: string;
    imageUrl: string;
    slug: string;
    category: string;
}


export interface ProductPageTypes {
    _id: string;
    price: number;
    name: string;
    images: any;
    slug: string;
    category: string;
    description: string;
}