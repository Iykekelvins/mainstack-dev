import Image from "next/image";
import { Button } from "..";
import { appImages } from "../../public/appImages";

const CardOne = () => {
  return (
    <section className="card-one">
      <article>
        <h2>
          Conversations <br /> designed for <br /> people, not bots.
        </h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.Amet minim
        </p>
        <Button background="white">Get started</Button>
      </article>
      <article className="flex-ac">
        <Image
          src={appImages.model}
          width={327}
          height={679.29}
          alt="profile screen"
        />
        <Image
          src={appImages.model}
          width={327}
          height={679.29}
          alt="profile screen"
        />
      </article>
    </section>
  );
};

export default CardOne;
