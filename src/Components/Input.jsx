import React, { useId } from "react";

function Input({
  label,
  amount,
  amountchange,
  currencychange,
  currencyoptions = [],
  selectcurrency = "usd",
  className = "",
}) {
  const idnum = useId();

  return (
    <div className={`bg-[#d6ccc2] p-3 rounded-lg text-sm flex ${className}`}>
      <div className=" w-1/2">
        <label htmlFor={idnum} className="text-black mb-2 block">
          {label}
        </label>

        <input
        className="rounded-2xl p-2 bg-[#f5ebe0]"
          type="number"
          id={idnum}
          placeholder="Enter Your Amount"
          value={amount}
          onChange={(e) => amountchange(Number(e.target.value))}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black mb-2 w-full">Currency Type</p>

        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectcurrency}
          onChange={(e) => currencychange(e.target.value)}
        
        >
          {currencyoptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
