import React from "react";
import Input from "./Input";

interface ITextField {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField({ name, label, value, onChange }:ITextField) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <Input
        value={value}
        id={name}
        onChange={onChange}
        type="text"
        className="textField__input"
        placeholder="e.g. +1 416 123 4567"
      />
    </div>
  );
}

export default TextField;
