import { ProductImage } from "./ProductImage";
import { ProductButton } from "./ProductButton";
import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Modal from "./Modal";
import { useState } from "react";
interface IProps {
  product: IProduct;
}
export const ProductCard = ({ product }: IProps) => {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <div className="max-w-sm md:max-w-lg w-full border border-gray-300 rounded-md p-2 flex flex-col ">
      <ProductImage
        alt="product-img"
        src={product.image}
        styles="rounded mb-1 max-h-60"
      />
      <h3 className="text-start">{product.category}</h3>
      <p className="text-start">{txtSlicer(product.description)} </p>
      <div className="flex gap-1 items-center my-2 ">
        {product.colors.map((color) => (
          <span
            className={`w-5 h-5 rounded-full `}
            key={color}
            style={{ backgroundColor: `${color}` }}
          />
        ))}
      </div>
      <div className="flex justify-between items-center my-2 ">
        <span className="">{product.price}$</span>
        <ProductImage
          alt="product-img"
          src="https://picsum.photos/150"
          styles="w-10 h-10 rounded-full"
        />
      </div>
      <div className="grid grid-cols-2 my-2 gap-1">
        <ProductButton
          className="!bg-[#3d1fc0]
        text-cyan-50 rounded-md"
          onClick={() => {
            open();
          }}
          width="w-full"
        >
          Edit
        </ProductButton>
        <ProductButton
          className="!bg-[#cc2d1d] text-white rounded-md"
          onClick={() => {
            console.log("clicked");
          }}
          width="w-full"
        >
          Delete
        </ProductButton>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} close={close}>
          {" "}
          <div className="grid grid-cols-2 my-2 gap-1">
            <ProductButton
              className="!bg-[#3d1fc0]
        text-cyan-50 rounded-md"
              onClick={() => {
                open();
              }}
              width="w-full"
            >
              Submit
            </ProductButton>
            <ProductButton
              className="!bg-[#cc2d1d] text-white rounded-md"
              onClick={() => {
                close();
              }}
              width="w-full"
            >
              Delete
            </ProductButton>
          </div>
        </Modal>
      )}
    </div>
  );
};
