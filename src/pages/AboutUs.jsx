import About from "../components/About/About";
import PageHeader from "../components/PageHeader/PageHeader";
import PageTitle from "../components/PageTitle/PageTitle";
import Team from "../components/Team/Team";

export default function AboutUs() {
  return (
    <>
      <PageHeader title="About Us" />
      <PageTitle title="About" pageLinkName="about" />
      <div className="page-content">
        <About />
        <Team />
      </div>
    </>
  );
}
