export const FormCard = ({ title, children, btnChildren }) => {
  return (
    <div className="bg-white text-3xl md:text-4xl font-bold flex-wrap p-12 w-96 space-y-4 rounded defaultShadow">
      <div className="uppercase text-2xl">{title}</div>
      <div className="space-y-2">{children}</div>
      {btnChildren}
    </div>
  );
};
