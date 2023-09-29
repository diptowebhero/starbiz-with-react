import Animate from "../Animate";
import Contact from "../components/Contact/Contact";
import PageHeader from "../components/PageHeader/PageHeader";
import PageTitle from "../components/PageTitle/PageTitle";

export default function ContactPage() {
 
  return (
    <>
    <Animate>
      <PageHeader title="Contact Us" />
      <PageTitle title='Contact' pageLinkName='contact'/>
      <Contact />
      </Animate>
    </>
  );
}
