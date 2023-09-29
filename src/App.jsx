import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import "./index.css";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <>
      <AnimatePresence>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AnimatePresence>
    </>
  );
}

export default App;
