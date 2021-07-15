import { FC } from "react";

export interface IRouterContext {
  route: string;
  setRoute: (newRoute: string) => void;
}

export interface Route {
  name: string;
  component: FC;
}

export interface RouterProps {
  routes: Route[];
}
