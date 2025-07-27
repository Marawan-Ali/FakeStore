export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: Category,
    image: string,
    rating: Rating
}

export interface Rating {
    rate: number
    count: number
}

export type Category = 'electronics' | 'jewelery' | "men's clothing" | "women's clothing";

export const Categories: Category[] = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing"
];
