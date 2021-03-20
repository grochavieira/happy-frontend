import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import EditOrphanage from "../pages/EditOrphanage";
import DeleteOrphanage from "../pages/DeleteOrphanage";

export interface AuthRoutesProps {
  toggleTheme: () => void;
}

const AuthRoutes: React.FC<AuthRoutesProps> = ({ toggleTheme }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/login" to="/" />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/edit/:id" component={EditOrphanage} />
        <Route exact path="/delete/:id" component={DeleteOrphanage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRoutes;
