import {
  Navbar,
  Seo,
  Hero,
  Dashboard,
  CardOne,
  CardTwo,
  SocialCards,
  CardThree,
  Payments,
} from "../components";

const Home = () => {
  return (
    <main>
      <Seo />
      <Navbar />
      <section className="container">
        <Hero />
        <Dashboard />
        <CardOne />
        <CardTwo />
        <SocialCards />
        <CardThree />
        <Payments />
      </section>
    </main>
  );
};

export default Home;
