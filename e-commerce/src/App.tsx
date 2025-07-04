import { ChangeEvent, useState } from "react";
import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { COLORS, Category, formInputs, products } from "./data";
import Modal from "./components/Modal";
import { ProductButton } from "./components/ProductButton";
import { InputFrom } from "./components/InputFrom";
import { IFormProductError, IProduct } from "./interfaces";
import { productValidation } from "./validation";
import MsgError from "./components/MsgError";
import { CircleColors } from "./components/CircleColors";
import Select from "./components/Select";

function App() {
  const defaultProductObj = {
    title: "",
    description: "",
    image: "",
    price: "",
    id: 0,
    colors: [],
  };
  const [isOpen, setIsOpen] = useState(false);
  const [colorState, setColorState] = useState<string[]>([]);
  const [productsData, setProductsData] = useState<any[]>(products);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [selected, setSelected] = useState(Category[3]);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);
  const [isEdit, setIsEdit] = useState(false);
  console.log(selected);
  const [error, setError] = useState<IFormProductError>({
    title: "",
    description: "",
    image: "",
    price: "",
    color: "",
  });

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name);

    if (isEdit) {
      setProductToEdit({ ...productToEdit, [name]: value });
    } else {
      setProduct({ ...product, [name]: value });
    }
    setError({ ...error, [name]: "" });
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(product, colorState, isEdit);

    if (isEdit) {
      const errors = productValidation({...productToEdit, colors:[...colorState]});
      setError(errors);
      const hasErrorMsg = Object.values(errors).every((value) => value === "");
      if (!hasErrorMsg) return;
      setProductsData((prev) =>
        prev.map((prod) =>
          prod.id === productToEdit.id ? {...productToEdit,colors:[...colorState]} : prod
        )
      );
    } else {
      const errors = productValidation({
        ...product,
        colors: [...colorState],
            });
      setError(errors);
      const hasErrorMsg = Object.values(errors).every((value) => value === "");
      console.log(product, colorState, errors);
      if (!hasErrorMsg) return;
      console.log(colorState)
      setProductsData((prev) => [
        ...prev,
        {
          ...product,
          id: Math.floor(Math.random() * 100),
          colors: [...colorState],
          category: selected,
        },
      ]);
    }
    console.log("Send Data To Server", productsData);
    setColorState([]);
    setProduct(defaultProductObj);
    setIsEdit(false);
    console.log(product);
    setProductToEdit(defaultProductObj);
    close();
    console.log("Send Data To Server", productsData);
  };
  const handleColorCircles = (color: string) => {
    setColorState((prev) =>
      prev.find((col) => col === color)
        ? prev.filter((col) => col !== color)
        : [...prev, color]
    );
  };
  const handleEditData = (product: IProduct) => {
    open();
    setIsEdit(true);
    console.log(product);
    setProductToEdit(product);
    {
      product?.colors && setColorState(product?.colors);
    }
  };
  return (
    <>
      <ProductButton
        className="!bg-[#673ab7]
        text-cyan-50 rounded-md mb-4 ms-auto block"
        onClick={() => {
          setIsEdit(false);
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
                    value={
                      isEdit ? productToEdit[input.title] : product[input.title]
                    }
                  />
                  <MsgError msg={error[input.title]} />
                </div>
              ))}
            </div>
            <div className="flex gap-2 mb-3">
              {colorState.map((color) => (
                <span
                  key={color}
                  className="rounded-md w-17 h-6 block p-0.5 text-sm text-white "
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              {COLORS.map((color) => (
                <CircleColors
                  key={color}
                  color={color}
                  onClick={() => {
                    handleColorCircles(color);
                  }}
                />
              ))}
            </div>
            {!colorState.length ? isEdit  ? <MsgError msg={ "enter a valid color"} />:<MsgError msg={ error.color }/>: null }

            <Select selected={isEdit && product?.category ? product?.category : selected} setSelected={setSelected} />

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
                  setError({
                    title: "",
                    description: "",
                    image: "",
                    price: "",
                    color: "",
                  });
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
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleEditData={handleEditData}
          />
        ))}
      </div>
    </>
  );
}

export default App;
