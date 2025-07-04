import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IProductImage {
    alt: string;
    src: string;
    styles?: string;

}
export interface IProductButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className: string;
    width: "w-fit" | "w-full"
}
export interface IProduct {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
    colors?: string[];
    category?: ICategory;

}
export interface ICategory{
    id?: number;
    image: string;
    category?: string;

}
export interface IFormProductError extends IFormProduct {
    title: string;
    description: string;
    image: string;
    price: string;
    color: string;
}
export interface IFormProduct{
    title: string;
    description: string;
    image: string;
    price: string;
    colors?: string[];
}
export interface IFormInput {
    title: "title" |
    "description" |
    "image" |
    "price";
    id: string;
    label: string;
    text: string;


}