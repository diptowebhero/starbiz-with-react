import About from "../components/About/About";
import PageTitle from "../components/PageTitle/PageTitle";
import Team from "../components/Team/Team";

export default function AboutUs() {


  return (
    <>
       <PageTitle title='About' pageLinkName='about'/>
      <div className='page-content'>
        <About />
        <Team />
      </div>
    </>
  );
}
