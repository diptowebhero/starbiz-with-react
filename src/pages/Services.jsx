// import ServiceBox from "../components/ServiceBox/ServiceBox";
import PageTitle from "../components/PageTitle/PageTitle";
import ServiceBox from "../components/ServiceBox/ServiceBox";
import services from "../localJson/service";
// import { useEffect, useState } from "react";
// import SingleService from "../components/SingleService/SingleService";

export default function Services() {
  const servicePage = services;
  // const [serviceAll, setServiceAll] = useState();

  // useEffect(() => {
  //   // fetch(`/service.json`)
  //   // .then(res => res.json())
  //   // .then(data => setServicePage(data))
  //   // setServicePage(services);
  //   // setServicePage(services);
  //   console.log(
  //     JSON.parse(services)
  //   );
  // }, [servicePage]);

  return (
    <div>
      <PageTitle title="services" pageLinkName="services" />
      <div className="container pt-5">
        <div className="row">
          {servicePage.map((service) => {
            return <ServiceBox key={service.id} service={service} />;
          })}
        </div>
      </div>

      {/* {servicePage?.map((service) => {
        <SingleService key={service.id} service={service} />;
      })} */}
    </div>
  );
}
