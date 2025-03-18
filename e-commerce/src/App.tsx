import { ChangeEvent, useState } from "react";
import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { formInputs, products } from "./data";
import Modal from "./components/Modal";
import { ProductButton } from "./components/ProductButton";
import { InputFrom } from "./components/InputFrom";
import { IFormProduct, IProduct } from "./interfaces";
import { productValidation } from "./validation";
import MsgError from "./components/MsgError";

function App() {
  const defaultProductObj = {
    title: "",
    description: "",
    image: "",
    price: "",
  };
  const [isOpen, setIsOpen] = useState(false);
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
