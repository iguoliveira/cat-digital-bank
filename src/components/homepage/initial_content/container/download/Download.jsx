import Pointer from "/pointer-download.png";

export const Download = () => {

  return (
    <div className="w-1/2 relative left-10 top-10 md:left-20 md:top-28 xl:left-40 xl:top-32">
      <div className="text-2xl md:text-4xl font-bold flex-wrap pb-4">
        <span className="after:content-['\a'] after:whitespace-pre">
          Your Furrvorite Bank
        </span>
        <span>In One Click</span>
      </div>
      <div className="bg-black w-32 md:w-48 text-white flex justify-center text-1xl md:text-2xl py-1 font-bold">
        Download Now
      </div>
      <div className="relative bottom-6 md:bottom-8 left-24 md:left-36">
        <img className="w-20 md:w-28" src={Pointer} />
      </div>
    </div>
  );
};
