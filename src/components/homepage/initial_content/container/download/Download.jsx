import Pointer from "/pointer-download.png";

export const Download = () => {

  return (
    <div className="w-1/2 relative left-10 bottom-64 md:left-20 md:top-28 xl:left-40 xl:top-32">
      <div className="text-4xl md:text-4xl w-80 font-bold flex-wrap pb-4">
        <span className="after:content-['\a'] after:whitespace-pre">
          Your Favorite Bank
        </span>
        <span>In One Click</span>
      </div>
      <div className="bg-black w-48 md:w-48 text-white flex justify-center text-2xl md:text-4xl py-1 font-bold">
        Download Now
      </div>
      <div className="relative bottom-6 md:bottom-8 left-36 md:left-36">
        <img className="w-20 md:w-28" src={Pointer} />
      </div>
    </div>
  );
};
