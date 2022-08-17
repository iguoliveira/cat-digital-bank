import BlackLogo from '/cat-logo-black.png'

export const Navbar = () => {
  return (
    <div className="bg-white fixed inset-0 p-3">
      <div className="flex justify-between mx-4">
        <div className="flex gap-8 text-xl">
          <img src={BlackLogo} className="w-16" />

          <div className="flex items-center gap-3">
            <div>SIM</div>
            <div>OPA</div>
            <div>DUDU</div>
          </div>
        </div>

        <div>Assine ja!</div>
      </div>
    </div>
  );
};
