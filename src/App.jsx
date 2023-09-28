import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import "./index.css";
function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
