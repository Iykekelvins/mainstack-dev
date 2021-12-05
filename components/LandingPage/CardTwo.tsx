import { Button } from "..";
import Image from "next/image";
import { appImages } from "../../public/appImages";

const CardTwo = () => {
  return (
    <section className="card-two">
      <article className="card-two--top">
        <h1>
          Conversations designed for <br /> <span>people, not bots.</span>
        </h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. <br /> Velit officia consequat duis enim velit mollit.
          Exercitation veniam
        </p>
      </article>
      <article className="card-two--bottom">
        <div className="card-two--info">
          <h2>
            Conversations designed <br /> for people, not bots.
          </h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.Amet minim
          </p>
          <Button background="white">Get started</Button>
        </div>
        <div className="card-two--images">
          <Image
            src={appImages.person1}
            width={295}
            height={401}
            alt="picture of a woman"
          />
          <div>
            <Image
              src={appImages.person2}
              width={218.32}
              height={233}
              alt="picture of a man"
            />
            <Image
              src={appImages.person3}
              width={223}
              height={168}
              alt="picture of a woman"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default CardTwo;
