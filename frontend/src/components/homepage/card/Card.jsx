export const Card = (props) => {
  return (
    <div className="bg-white w-grid sm:w-3/12 p-2 rounded shadow-md shadow-black">
      <div className="bg-gray-300 rounded flex flex-col items-center">
      <div className="-mt-20 md:absolute md:bottom-56">
        <img src={props.image} />
      </div>
        <div className="flex flex-col items-center py-5 md:py-14 text-center">
          <div className="text-2xl font-bold">{props.title}</div>
          <div className="text-center">{props.content}</div>
        </div>
      </div>
    </div>
  );
};
