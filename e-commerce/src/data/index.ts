import { IFormInput } from "../interfaces";

export const products = [
    {
        id: 1,
        title: "Product 1",
        description: "This is a description of Product 1 This is a description of Product 1 This is a description of Product 1.",
        image: "https://picsum.photos/150",
        category: {
            id: 41,
            image: "https://picsum.photos/150",
        },
        price: "29.99",
        colors: ["#820000", "#FF0032"]
    },
    {
        id: 2,
        title: "Product 2",
        description: "This is a description of Product 2 This is a description of Product 2 This is a description of Product 2 This is a description of Product 2.",
        image: "https://picsum.photos/150",
        category:  {
            id: 11,
            image: "https://picsum.photos/150",
        },
        price: "49.99",
        colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"]
    },
    {
        id: 3,
        title: "Product 3",
        description: "This is a description of Product 3 This is a description of Product 2 This is a description of Product 2 .",
        image: "https://picsum.photos/150",
        category:  {
            id: 411,
            image: "https://picsum.photos/150",
        },
        price: "19.99",
        colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"]
    },
    {

        id: 5,
        title: "Product 1",
        description: "This is a description of Product 1 This  is a description of Product 2 This is a description of Product 2.",
        image: "https://picsum.photos/150",
        category:  {
            id: 411,
            image: "https://picsum.photos/150",
        },
        price: "29.99",
        colors: ["#A31ACB",  "#1F8A70", "#820000", "#FF0032"]
    },
    {
        id: 4,
        title: "Product 2",
        description: "This is a description of Product 2 This is a hiiiiiii of Product 2 This is a description of Product 2.",
        image: "https://picsum.photos/150",
        category:  {
            id: 413,
            image: "https://picsum.photos/150",
        },
        price: "49.99",
        colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000"]
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

export const COLORS = ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"];

export const Category= [
    {
        id: 4,
        image: "https://picsum.photos/150",
        category: "nike",
    },
    {
        id: 3,
        image: "https://picsum.photos/150",
        category: "shirt",
    },
    {
        id: 2,
        image: "https://picsum.photos/150",
        category: "shoes",
    },
    {
        id: 1,
        image: "https://picsum.photos/150",
        category: "pantalon",
    },
]