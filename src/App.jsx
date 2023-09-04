import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import $ from 'jquery';
// import 'lazysizes';
// import 'owl.carousel';
// $(function(){
//   $('.owl-carousel').owlCarousel({});
// });
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
