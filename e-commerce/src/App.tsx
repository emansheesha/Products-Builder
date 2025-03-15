import { ChangeEvent, useState } from "react";
import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { formInputs, products } from "./data";
import Modal from "./components/Modal";
import { ProductButton } from "./components/ProductButton";
import { InputFrom } from "./components/InputFrom";
import { IProduct } from "./interfaces";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>({
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
  };
  console.log("productForm" , product);
  
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
              </div>
            ))}
          </div>
          <div className="my-2 grid grid-cols-2 gap-1">
            <ProductButton
              className="!bg-[#673ab7]
        text-cyan-50 rounded-md"
              onClick={() => {
                open();
              }}
              width="w-full"
            >
              Submit
            </ProductButton>
            <ProductButton
              className="!bg-[#bf1808]
        text-cyan-50 rounded-md"
              onClick={() => {
                close();
              }}
              width="w-full"
            >
              Cancel
            </ProductButton>
          </div>
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
