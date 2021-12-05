import Image from "next/image";
import { Button } from "..";
import { appImages } from "../../public/appImages";

const CardThree = () => {
  return (
    <section className="card-three flex-ac">
      <article className="card-three--info">
        <h4>Set up all your media links</h4>
        <h2>
          See your most important <br /> <span>conversations first.</span>
        </h2>
        <p>
          See your most important conversations first. Snooze, archive, or jump
          back in. Activity Feed always keeps your conversations within reach,
          so you can quickly.
        </p>
        <Button background="black">Get started</Button>
      </article>
      <article className="card-three--image">
        <Image
          src={appImages.explore}
          width={500}
          height={488.93}
          alt="image of an iphone"
        />
      </article>
    </section>
  );
};

export default CardThree;
