import {  IFormProduct, IFormProductError } from "../interfaces";

export const productValidation = (product: IFormProduct) => {
    const errors: IFormProductError = {
        title: '',
        description: '',
        price: '',
        image: '',
        color: ''
    }
    console.log("product",product);
    
    const titleLength = product.title.length;
    const descriptionLength = product.description.length;
    const fileImg = "https?:\/\/.*\.(png|jpe?g|gif|webp|bmp|tiff?)";
    if (!product.title.trim() || titleLength < 10 || titleLength > 80) {
        errors.title = "Product Title Characters Should be between 10 and 80 character";
    }
    if (!product.description.trim() || descriptionLength < 10 || descriptionLength > 80) {
        errors.description = "Product Description Characters Should be between 10 and 80 character";
    }
    if (!product.price.trim() || isNaN(Number(product.price))) {
        errors.price = "enter valid price";
    }
    if (!product.image.trim() || !fileImg) {
        errors.image = "enter valid image";
    }
    if (product?.colors !== undefined && !product?.colors.length) {
        errors.color = "enter valid colors";
    }
    return errors;

}