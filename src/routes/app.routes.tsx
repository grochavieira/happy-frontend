import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import OrphanagesMap from "../pages/OrphanagesMap";
import Orphanage from "../pages/Orphanage";
import CreateOrphanage from "../pages/CreateOrphanage";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import PasswordReset from "../pages/PasswordReset";
import SuccessfulRegistration from "../pages/SuccessfulRegistration";
import UserRegistration from "../pages/UserRegistration";

interface AuthRoutesProps {
  toggleTheme: () => void;
}

const AppRoutes: React.FC<AuthRoutesProps> = ({ toggleTheme }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Landing toggleTheme={toggleTheme} />}
        />
        <Route exact path="/app" component={OrphanagesMap} />
        <Route exact path="/orphanages/create" component={CreateOrphanage} />
        <Route exact path="/orphanages/:id" component={Orphanage} />
        <Route exact path="/user-registration" component={UserRegistration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/password-reset" component={PasswordReset} />
        <Route exact path="/success" component={SuccessfulRegistration} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
