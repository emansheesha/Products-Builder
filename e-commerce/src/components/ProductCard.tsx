import React from "react";
import { ProductImage } from "./ProductImage";
import { ProductButton } from "./ProductButton";

export const ProductCard = () => {
  return (
    <div className="w-full border border-gray-300 rounded-md p-2 flex flex-col ">
      <ProductImage
        alt="product-img"
        src="https://picsum.photos/150"
        styles="rounded my-2"
      />
      <h3 className="text-start">Car</h3>
      <p className="text-start">
        ProductCard Car ProductCard Car ProductCard Car ProductCard Car{" "}
      </p>
      <div className="flex gap-1 items-center my-2 ">
        <span className="w-5 h-5 rounded-full bg-amber-50 " />
        <span className="w-5 h-5 rounded-full bg-amber-800 " />
        <span className="w-5 h-5 rounded-full bg-indigo-600" />
        <span className="w-5 h-5 rounded-full bg-cyan-800 " />
        <span className="w-5 h-5 rounded-full bg-lime-800" />
      </div>
      <div className="flex justify-between items-center my-2 ">
        <span className="">1000$</span>
        <ProductImage
          alt="product-img"
          src="https://picsum.photos/150"
          styles="w-10 h-10 rounded-full"
        />
      </div>
      <div className="grid grid-cols-2 my-2 gap-1">
        <ProductButton
          styles="!bg-blue-700 text-cyan-50 rounded-md"
          text="Edit"
        />
        <ProductButton
          styles="!bg-pink-900 text-white rounded-md"
          text="Delete"
        />
      </div>
    </div>
  );
};
