import { useEffect, useState } from "react";
import PageBanner from "../components/Banner/PageBanner";
import Contact from "../components/Contact/Contact";

export default function ContactPage() {
  const [currentPageName, setCurrentPageName] = useState("");

  useEffect(() => {
    // Update the currentPageName when the component mounts or when the pathname changes.
    const updatePageName = () => {
      const pathname = window.location.pathname;

      // Split the pathname by '/' and get the last segment
      const segments = pathname.split("/");
      setCurrentPageName(segments[segments.length - 1]);
    };

    // Initial setup
    updatePageName();

    // Listen for changes in the pathname
    window.addEventListener("popstate", updatePageName);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("popstate", updatePageName);
    };
  }, []);

  return (
    <>
      <PageBanner currentPageName={currentPageName} />
      <Contact />
    </>
  );
}
