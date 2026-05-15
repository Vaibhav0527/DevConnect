function Input({
  type,
  placeholder,
  value,
  onChange
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 mb-4 rounded bg-zinc-800 outline-none"
    />
  );
}

export default Input;