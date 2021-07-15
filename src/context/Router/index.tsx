import React, {
  createContext,
  FC,
  Fragment,
  useContext,
  useState,
} from "react";
import { IRouterContext, RouterProps } from "./models";

export const RouterContext = createContext<IRouterContext | undefined>(
  undefined
);

export const useRouterContext = () => {
  const routerContext = useContext(RouterContext);
  if (!routerContext) {
    throw new Error(`useRouterContext must be used within a Router Provider`);
  }
  return routerContext;
};

export const defaultRoute = "";

const Router: FC<RouterProps> = ({ routes }) => {
  const [route, setRoute] = useState<string>(defaultRoute);

  const RouteComponent = routes.filter(({ name }) => name === route)[0]
    ?.component || <Fragment />;

  return (
    <RouterContext.Provider
      value={{
        route,
        setRoute,
      }}
    >
      <RouteComponent />
    </RouterContext.Provider>
  );
};

export default Router;
