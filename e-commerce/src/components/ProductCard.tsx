import { ProductImage } from "./ProductImage";
import { ProductButton } from "./ProductButton";
import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
interface IProps {
  product: IProduct;
  handleEditData: (product: IProduct) => void;
  setIsDeleteDialogeOpen: (state: boolean) => void;
  setProductId: (state: number) => void;
}
export const ProductCard = ({
  product,
  handleEditData,
  setIsDeleteDialogeOpen,
  setProductId,
}: IProps) => {
  return (
    <div className="max-w-sm md:max-w-lg w-full border border-gray-300 rounded-md p-2 flex flex-col ">
      <ProductImage
        alt="product-img"
        src={product.image}
        styles="rounded max-h-54 h-54"
      />
      <h3
        className="text-start text-zinc-700 font-semibold text-xl my-2
      overflow-hidden truncate"
      >
        {product.title}
      </h3>
      <p className="text-start font-normal text-sm h-16">
        {txtSlicer(product.description)}{" "}
      </p>
      <div className="flex gap-1 items-center my-2 ">
        {product?.colors?.map((color) => (
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
          src={product?.category?.image && product?.category?.image}
          styles="w-10 h-10 rounded-full"
        />
      </div>
      <div className="grid grid-cols-2 my-2 gap-1">
        <ProductButton
          className="!bg-[#673ab7]
        text-cyan-50 rounded-md"
          onClick={() => handleEditData(product)}
          width="w-full"
        >
          Edit
        </ProductButton>
        <ProductButton
          className="!bg-[#bf1808] text-white rounded-md"
          onClick={() => {
            console.log("clicked", product);
            setProductId(product.id);
            setIsDeleteDialogeOpen(true);
          }}
          width="w-full"
        >
          Delete
        </ProductButton>
      </div>
    </div>
  );
};
