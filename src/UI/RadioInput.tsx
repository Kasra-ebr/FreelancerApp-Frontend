import React from "react";
import Input from "./Input";

interface IRadioInput {
  name: string;
  value: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  checked:boolean
}

function RadioInput({ name, value, id, onChange, label,checked }: IRadioInput) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <Input
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        className="cursor-pointer w-4 h-4 accent-red-500"
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
