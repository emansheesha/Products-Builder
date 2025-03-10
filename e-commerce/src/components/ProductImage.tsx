import React from "react";
import { IProductImage } from "../interfaces";

export const ProductImage = ({ alt, src, styles }: IProductImage) => {
  return <img alt={alt} src={src} className={styles} />;
};
