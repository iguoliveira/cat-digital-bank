import Mastercard from "/mastercard.png";

export const CardFront = () => {
  return (
    <div className="bg-cardTheme-1000 rounded pb-4 text-white h-48 flex items-end justify-between">
      <div className="px-4">
        <div className="bg-[#f7e189] rounded px-6 py-1 w-10 mb-10">&#8203;</div>
        <div className="flex space-x-2 text-md mt-4 font-bold">
          Igor Oliveira Rodrigues
        </div>
      </div>
      <div className="px-4">
        <img src={Mastercard} className="w-12" />
      </div>
    </div>
  );
};
