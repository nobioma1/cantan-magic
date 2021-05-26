import React from 'react';

interface SelectOption {
  title: string;
  value: string;
}

interface DropdownProps {
  name: string;
  options: SelectOption[];
  label?: string;
  elRef?: React.RefObject<HTMLSelectElement>;
}

const Dropdown = ({ name, elRef, label, options }: DropdownProps) => {
  return (
    <div className="flex flex-col space-y-2 min-w-[300px]">
      <label id={name}>{label}</label>
      <select
        ref={elRef}
        className="border h-10 px-2 outline-none min-w-full"
        name={name}
        aria-labelledby={name}
        data-testid="DROPDOWN-SELECT"
      >
        {options.map((option) => (
          <option
            key={option.title}
            value={option.value}
            data-testid="DROPDOWN-SELECT-OPTIONS"
          >
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
