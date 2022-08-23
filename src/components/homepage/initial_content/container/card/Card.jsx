export const Card = (props) => {
  return (
    <div className="bg-white w-96 md:w-3/12 p-2 rounded">
      <div className="bg-gray-300 rounded flex flex-col items-center">
      <div className="relative bottom-20 md:absolute md:bottom-56">
        <img src={props.image} />
      </div>
        <div className="flex flex-col items-center py-5 md:py-14">
          <div className="text-2xl font-bold">{props.title}</div>
          <div className="text-center">{props.content}</div>
        </div>
      </div>
    </div>
  );
};
