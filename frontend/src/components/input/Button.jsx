export const Button = ({ onclick, children, isDisabled }) => {
  return (
    <button
      className={`${
        !isDisabled
          ? "bg-mainBrandColor-1000 hover:bg-mainBrandColor-900 text-white shadow-mainBrandColor-500 shadow-md active:shadow-black active:shadow-inner"
          : "bg-gray-500 text-white opacity-25"
      } rounded uppercase text-lg w-full p-2`}
      onClick={onclick}
      disabled={isDisabled}
    >
      {isDisabled ? "DISABLED" : children}
    </button>
  );
};
