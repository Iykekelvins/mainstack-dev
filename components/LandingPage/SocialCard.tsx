type SocialCardProps = {
  svg: React.ComponentProps<"svg">;
  title: string;
  color: "red" | "blue" | "green" | "pink";
};

import Image from "next/image";
import { appImages } from "../../public/appImages";

const SocialCard = ({ svg, title, color }: SocialCardProps) => {
  return (
    <article className="social-cards--card ">
      {svg}
      <h4 className={`social-cards--${color}`}>{title}</h4>
      <p>
        See your most important conversations first. Snooze, archive, or jump
        back in.{" "}
        <span>
          Activity Feed always keeps your conversations within reach, so you can
          quickly catch up on what’s new.
        </span>
      </p>
      <div className="flex-ac-jc">
        <Image
          src={appImages.iphone}
          width={320}
          height={298}
          alt="image of iphone"
        />
      </div>
    </article>
  );
};

export default SocialCard;
