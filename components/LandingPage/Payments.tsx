import Image from "next/image";
import { appImages } from "../../public/appImages";

const Payments = () => {
  return (
    <section className="payments flex-ac-jb">
      <article className="payments--card">
        <h4 className="payments--card--blue">Collect payment from your fans</h4>
        <p>
          See your most important conversations first.{" "}
          <span>Snooze, archive, or jump back in.</span>
        </p>
        <Image
          src={appImages.payment1}
          width={378}
          height={227}
          alt="image of a form"
        />
      </article>
      <article className="payments--card">
        <h4 className="payments--card--orange">
          Collect payment from your fans
        </h4>
        <p>
          See your most important conversations first.{" "}
          <span>Snooze, archive, or jump back in.</span>
        </p>
        <Image
          src={appImages.payment2}
          width={616}
          height={336.33}
          alt="image of a seminar"
        />
      </article>
    </section>
  );
};

export default Payments;
