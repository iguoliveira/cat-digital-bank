export const InputText = ({
  type,
  placeholder,
  value,
  onchange,
  maxlength,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border-black border-b w-full p-3 focus:border-l-2 focus:border-mainBrandColor-1000 focus:outline-none text-xl"
      value={value}
      onChange={onchange}
      maxLength={maxlength}
    />
  );
};
