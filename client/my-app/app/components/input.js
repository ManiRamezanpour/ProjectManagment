const Input = ({ required, label, register }) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-zinc-900">
        {label}
      </label>
      <input
        {...register(label, { required })}
        className="block w-full rounded-md px-1.5 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6"
      />
      {/* <p>{errors.label?.message}</p> */}
    </div>
  );
};

export default Input;
