import { IFormInput } from "../interfaces";

export const products = [
    {
        id: 1,
        title: "Product 1",
        description: "This is a description of Product 1 This is a description of Product 1 This is a description of Product 1.",
        image: "https://picsum.photos/150",
        category: "product1",
        price: "29.99",
        colors: ["#ffffff", "#000000", "#f1c40f", "#e74c3c", "#8e44ad"]
    },
    {
        id: 2,
        title: "Product 2",
        description: "This is a description of Product 2 This is a description of Product 2 This is a description of Product 2 This is a description of Product 2.",
        image: "https://picsum.photos/150",
        category: "product1",
        price: "49.99",
        colors: ["#ff0000", "#00ff00", "#0000ff", "#f1c40f", "#e74c3c", "#8e44ad"]
    },
    {
        id: 3,
        title: "Product 3",
        description: "This is a description of Product 3 This is a description of Product 2 This is a description of Product 2 .",
        image: "https://picsum.photos/150",
        category: "product1",
        price: "19.99",
        colors: ["#f1c40f", "#e74c3c", "#8e44ad", "#ff0000", "#00ff00", "#0000ff"]
    },
    {

        id: 5,
        title: "Product 1",
        description: "This is a description of Product 1 This  is a description of Product 2 This is a description of Product 2.",
        image: "https://picsum.photos/150",
        category: "product1",
        price: "29.99",
        colors: ["#ff0000", "#00ff00", "#0000ff", "#ffffff", "#000000"]
    },
    {
        id: 4,
        title: "Product 2",
        description: "This is a description of Product 2 This is a hiiiiiii of Product 2 This is a description of Product 2.",
        image: "https://picsum.photos/150",
        category: "product1",
        price: "49.99",
        colors: ["#ff0000", "#00ff00", "#0000ff"]
    },
];

export const formInputs: IFormInput[] = [
    {
        title: "title",
        id: "1",
        label: "Product Name",
        text: "Product Name"

    },
    {
        title: "description",
        id: "2",
        label: "Product Description",
        text: "Product Description"

    },
    {
        title: "image",
        id: "3",
        label: "Product Image URL",
        text: "Product Image URL"

    },
    {
        title: "price",
        id: "4",
        label: "Product Price",
        text: "Product Price"

    },
    
]