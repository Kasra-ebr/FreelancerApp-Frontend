import React from "react";
export interface Option {
   value: string;
  label: string;
} 
interface ISelect {
    value:string , 
    onChange: () => void , 
    options: Option[],
} 
function Select({ value, onChange, options }:ISelect) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="textField__input py-2 text-xs bg-secondary-0"
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
