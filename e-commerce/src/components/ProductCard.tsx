import { ProductImage } from "./ProductImage";
import { ProductButton } from "./ProductButton";
import { IProduct } from "../interfaces";
interface IProps {
  product: IProduct;
}
export const ProductCard = ({ product }: IProps) => {
  return (
    <div className="w-full border border-gray-300 rounded-md p-2 flex flex-col ">
      <ProductImage
        alt="product-img"
        src={product.image}
        styles="rounded my-2"
      />
      <h3 className="text-start">{product.category}</h3>
      <p className="text-start">{product.description} </p>
      <div className="flex gap-1 items-center my-2 ">
        {product.colors.map((color) => (
          <span className={`w-5 h-5 rounded-full bg-[${color}]`} key={color} />
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
          className="!bg-blue-700 text-cyan-50 rounded-md"
          onClick={() => {
            console.log("clicked");
          }}
          width="w-full"
        >
          Edit
        </ProductButton>
        <ProductButton
          className="!bg-pink-900 text-white rounded-md"
          onClick={() => {
            console.log("clicked");
          }}
          width="w-full"
        >
          Delete
        </ProductButton>
      </div>
    </div>
  );
};
