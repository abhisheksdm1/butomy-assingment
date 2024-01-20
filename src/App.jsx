import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing, Error } from "./pages";
import Blush from "./pages/Blush";
import Checkout from "./pages/Checkout";
// import Blush from "./pages/Blush";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/blush",
    element: <Blush />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
