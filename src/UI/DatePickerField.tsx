import React from "react";
import DatePicker from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";

interface DatePickerFieldProps {
  label: string;
  date: Value;
  setDate: (date: Value) => void;
}

function DatePickerField({ label, date, setDate }: DatePickerFieldProps) {
  return (
    <div>
      <span className="mb-2 block text-secondary-700">{label}</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="textField__input"
        calendarPosition="bottom-center"
        value={date}
        onChange={setDate}
        format="YYYY/MM/DD"
      />
    </div>
  );
}

export default DatePickerField;
