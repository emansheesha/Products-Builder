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
    colors: string[];
    category: string;

}