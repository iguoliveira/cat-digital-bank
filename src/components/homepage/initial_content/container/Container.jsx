import { Download } from "./download/Download";
import { Card } from "./card/Card";
import DataSecurity from "/data-security.png";
import Time from "/time.png";
import Verification from "/verification.png";

export const Container = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="h-screen flex items-center justify-center">
        <Download />
      </div>
      <div className="flex flex-wrap justify-around gap-24 py-32">
        <Card
          image={DataSecurity}
          title="Data Security"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <Card
          image={Time}
          title="Anywhere Any Time"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <Card
          image={Verification}
          title="Certification"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </div>
      <div className="h-screen bg-white py-32 flex flex-col justify-center items-center space-y-10">
        <div className="w-grid text-left">
          <span className="text-3xl font-bold">
            Stay on top of all the news about financial services, secure
            payments and managing your business on the <span>About CAT</span>
          </span>
        </div>
        <button className="bg-pink-1000 hover:bg-pink-500 py-4 px-5 text-white font-bold w-grid text-xl uppercase shadow-md shadow-black">
          Access Content
        </button>
      </div>
    </div>
  );
};
