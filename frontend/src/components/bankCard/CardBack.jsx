import Mastercard from "/mastercard.png";

export const CardBack = () => {
  return (
    <div className="bg-cardTheme-1000 rounded pb-4 text-white">
      <span className="text-[5px] flex item-center ml-2">
        made by @CAT Bank
      </span>
      <div className="bg-cardTheme-500 py-2">&#8203;</div>
      <div className="px-4">
        <div className="w-16 flex flex-col items-center mt-2">
          <div>platinum</div>
          <div className="bg-cardTheme-500 rounded-xl w-10 px-8 py-1">
            &#8203;
          </div>
        </div>
        <div className="flex space-x-2 text-lg mt-4">5023 9334 3764 9846</div>
        <div className="flex items-center space-x-36">
          <div>
            <div className="flex space-x-10">
              <div className="flex items-center space-x-1">
                <span className="text-[10px]">val:</span>
                <span>02/20</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-[10px]">cod:</span>
                <span>113</span>
              </div>
            </div>
          </div>
          <div>
            <img src={Mastercard} className="w-12" />
          </div>
        </div>
      </div>
    </div>
  );
};
