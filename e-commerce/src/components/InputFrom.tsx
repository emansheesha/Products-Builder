import { Field, Input, Label } from "@headlessui/react";
import { InputHTMLAttributes } from "react";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  title: string;
  label: string;
  value:string;
}
export const InputFrom = ({ id, title,value, label, ...rest }: IProps) => {
  return (
    <Field>
      <Label htmlFor={id} className="mb-1">
        {label}
      </Label>
      <Input
        name={title}
        id={id}
        autoFocus={true}
        value={value}
        className="w-full border border-gray-300 rounded-md h-10  data-[hover]:shadow "
        {...rest}
      />
    </Field>
  );
};
