import { Download } from "./download/Download";
import { Card } from "./card/Card";
import DataSecurity from "/data-security.png";
import Time from "/time.png";
import Verification from "/verification.png";

export const Container = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="h-screen flex items-center">
        <Download />
      </div>
      <div className="flex flex-wrap justify-around gap-24 mt-24">
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
    </div>
  );
};
