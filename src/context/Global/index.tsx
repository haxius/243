import React, { FC } from "react";

interface GlobalContextProps {
  children: any;
}

const GlobalContext: FC<GlobalContextProps> = ({ children }) => <>{children}</>;

export default GlobalContext;
