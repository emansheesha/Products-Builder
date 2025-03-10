import { IProductButton } from "../interfaces";

export const ProductButton = ({
  className,
  children,
  width = "w-fit",
  ...rest
}: IProductButton) => {
  return (
    <button className={`${className} ${width}`} {...rest}>
      {children}
    </button>
  );
};
