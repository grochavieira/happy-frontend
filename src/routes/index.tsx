import React, { useContext } from "react";

import AuthRoutes, { AuthRoutesProps } from "./auth.routes";
import AppRoutes from "./app.routes";
import AuthContext from "../contexts/auth";

const Routes = ({ toggleTheme }: AuthRoutesProps) => {
  const { signed } = useContext(AuthContext);
  return signed ? (
    <AuthRoutes toggleTheme={toggleTheme} />
  ) : (
    <AppRoutes toggleTheme={toggleTheme} />
  );
};

export default Routes;
