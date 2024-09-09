import React from "react";

const Input = ({
  type,
  name,
  id,
  labelContent,
  pattern,
  length,
  value,
  onChange,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        className="block py-3 px-0 my-2 w-full text-sm text-green-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
        placeholder=" "
        required
        pattern={pattern}
        maxLength={length}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className="peer-focus:font-medium my-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {labelContent}
      </label>
    </>
  );
};

export default Input;
