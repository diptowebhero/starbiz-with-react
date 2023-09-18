
import { useEffect, useState } from "react";
import SingleService from "../components/SingleService/SingleService";


export default function Services() {

  const [servicePage, setServicePage] = useState();

  useEffect(()=> {
    fetch(`/service.json`)
    .then(res => res.json())
    .then(data => setServicePage(data))
  }, [])


  return (
    <>

   {
    servicePage.map(service => {
      <SingleService key={service.id} service={service} />
    })
   }

    </>
  );
}
