import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing, Error } from "./pages";
import Blush from "./pages/Blush";
// import Blush from "./pages/Blush";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
    // children: [
    //   {
    //     index: true,
    //     element: <Landing />,
    //   },
    // },
    // {
    //   path: "blush",
    //   element: <Blush />,
    // },
    // ],
  },
  {
    path: "/blush",
    element: <Blush />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
