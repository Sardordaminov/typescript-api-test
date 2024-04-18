import { useRoutes } from "react-router-dom";
import App from "./App";
import SingleProductView from "./pages/SingleProductView/SingleProductView";

interface Route {
  path: string;
  element: JSX.Element;
}

export const Routes = () => {
  const routes: Route[] = [
    { path: "/", element: <App /> },
    { path: "/product/:id", element: <SingleProductView /> },
  ];
  return useRoutes(routes);
};
