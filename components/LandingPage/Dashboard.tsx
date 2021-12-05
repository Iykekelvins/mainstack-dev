import Image from "next/image";
import { appImages } from "../../public/appImages";
import { appIcons } from "../../public/appIcons";
import { Icon } from "..";

const Dashboard = () => {
  return (
    <section className="dashboard flex-ac">
      <Icon classes="spotify" src={appIcons.spotify} />
      <Image
        src={appImages.dashboard1}
        width={820}
        height={395}
        alt="dashboard picture"
      />
      <Image
        src={appImages.dashboard2}
        width={403}
        height={395}
        alt="dashboard picture"
      />
      <Icon classes="tiktok" src={appIcons.tiktok} />
    </section>
  );
};

export default Dashboard;
