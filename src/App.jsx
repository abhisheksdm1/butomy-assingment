import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Homelayout, Landing, Error } from "./pages";
import Blush from "./pages/Blush";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "blush",
        element: <Blush />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
