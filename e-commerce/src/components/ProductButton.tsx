import React from "react";
import { IProductButton } from "../interfaces";

export const ProductButton = ({ styles, text }: IProductButton) => {
  return <button className={styles}>{text}</button>;
};
