
import Animate from "../Animate";
import PageHeader from "../components/PageHeader/PageHeader";
import PageTitle from "../components/PageTitle/PageTitle";
import PricePlan from "../components/PricePlan/PricePlan";
import ServiceBox from "../components/ServiceBox/ServiceBox";
import services from "../localJson/service";


export default function Services() {
  const servicePage = services;
 

  return (
    <>
    <Animate>
      <PageHeader title="Services" />
      <PageTitle title="services" pageLinkName="services" />
      <div className="container pt-5">
        <div className="row">
          {servicePage.map((service) => {
            return <ServiceBox key={service.id} service={service} />;
           })}
        </div>
        <PricePlan />
      </div>
      </Animate>
    </>
  );
}
