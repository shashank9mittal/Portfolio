import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Base from "./Components/Base";

function App() {
  return <RouterProvider router={appRouter}></RouterProvider>;
}

const appRouter = createBrowserRouter([
  {
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <Base />,
      },
    ],
  },
]);

export default App;
