import Pointer from "/pointer-download.png";

export const Download = () => {

  return (
    <div className="w-grid flex flex-col items-start">
      <div className="text-3xl md:text-4xl font-bold flex-wrap pb-4 text-left">
        <span className="after:content-['\a'] after:whitespace-pre uppercase text-4xl">
          Your bank
        </span>
        <span>in one click</span>
      </div>
      <button className="bg-black hover:bg-gray-900 w-grid md:w-48 text-white flex justify-center text-2xl uppercase md:text-4xl py-3 font-bold shadow-md shadow-black">
        Download
      </button>
      <div className="relative bottom-6 md:bottom-8 left-36 md:left-36">
        <img className="w-20 md:w-28" src={Pointer} />
      </div>
    </div>
  );
};
