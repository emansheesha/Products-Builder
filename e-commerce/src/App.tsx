import { ChangeEvent, useState } from "react";
import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { COLORS, formInputs, products } from "./data";
import Modal from "./components/Modal";
import { ProductButton } from "./components/ProductButton";
import { InputFrom } from "./components/InputFrom";
import { IFormProduct, IProduct } from "./interfaces";
import { productValidation } from "./validation";
import MsgError from "./components/MsgError";
import { CircleColors } from "./components/CircleColors";

function App() {
  const defaultProductObj = {
    title: "",
    description: "",
    image: "",
    price: "",
  };
  const [isOpen, setIsOpen] = useState(false);
  const [colorState , setColorState] =useState<string[]>([])
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [error, setError] = useState<IFormProduct>({
    title: "",
    description: "",
    image: "",
    price: "",
  });

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
    setError({ ...error, [name]: "" });
  };
  console.log("productForm", product);
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = productValidation(product);
    setError(errors);
    console.log(product, errors);
    const hasErrorMsg = Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) return;

    close();
    console.log("Send Data To Server", Object.values(errors));
    setProduct(defaultProductObj);
  };
const handleColorCircles = (color: string)=>{
  setColorState((prev)=> prev.find(col=>col===color) ? prev.filter((col=>col !== color)) :[...prev,color]) 
}
  return (
    <>
      <ProductButton
        className="!bg-[#673ab7]
        text-cyan-50 rounded-md mb-4 ms-auto block"
        onClick={() => {
          open();
        }}
        width="w-fit"
      >
        Add Product
      </ProductButton>
      {isOpen && (
        <Modal isOpen={isOpen} close={close}>
          {" "}
          <form onSubmit={onSubmitHandler}>
            <div>
              {formInputs.map((input) => (
                <div key={input.id} className="flex flex-col my-4">
                  <InputFrom
                    title={input.title}
                    label={input.label}
                    id={input.id}
                    name={input.title}
                    onChange={onChangeHandler}
                    value={product[input.title]}
                  />
                  <MsgError msg={error[input.title]} />
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              {colorState.map((color)=><span key={color} className="rounded-xl w-3xl h-8 block" style={{backgroundColor:color}}></span>)}
            </div>
            <div className="flex gap-2">
              {COLORS.map((color)=><CircleColors  key ={color} color={color} onClick={()=>{handleColorCircles(color)}}/>)}
            </div>
            <div className="my-2 grid grid-cols-2 gap-1">
              <ProductButton
                className="!bg-[#673ab7]
        text-cyan-50 rounded-md"
                width="w-full"
              >
                Submit
              </ProductButton>
              <ProductButton
                className="!bg-[#bf1808]
        text-cyan-50 rounded-md"
                onClick={() => {
                  setProduct(defaultProductObj);
                  close();
                }}
                width="w-full"
              >
                Cancel
              </ProductButton>
            </div>
          </form>
        </Modal>
      )}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
