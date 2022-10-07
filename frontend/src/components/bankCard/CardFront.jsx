import Mastercard from "/mastercard.png";

export const CardFront = ({ name }) => {
  return (
    <div className="bg-cardTheme-1000 rounded text-white h-48 flex items-end justify-between shadow-black shadow-sm relative w-[370px] overflow-auto">
      <div className="px-4 pb-4">
        <div className="bg-[#f7e189] rounded-tl-lg rounded-br-lg w-10 h-8 mb-16 grid grid-cols-4 grid-rows-2 border-yellow-700 border-2">
          <span className="border-yellow-400 border-2 rounded-tl-md">&#8203;</span>
          <span className="border-yellow-400 border-2">&#8203;</span>
          <span className="border-yellow-400 border-2">&#8203;</span>
          <span className="border-yellow-400 border-2">&#8203;</span>
          <span className="border-yellow-400 border-2">&#8203;</span>
          <span className="border-yellow-400 border-2">&#8203;</span>
          <span className="border-yellow-400 border-2">&#8203;</span>
          <span className="border-yellow-400 border-2 rounded-br-md">&#8203;</span>
        </div>
        <div className="text-md font-bold absolute z-40 bottom-0 pb-4 uppercase">
          {name}
        </div>
      </div>
      <div className="px-4 flex items-end justify-end bg-mainBrandColor-1000 h-full w-full rounded-tl-[2000px] relative z-10">
        <img src={Mastercard} className="w-12 pb-4"/>
      </div>
    </div>
  );
};
