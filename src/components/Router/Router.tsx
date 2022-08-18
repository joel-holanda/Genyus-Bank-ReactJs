import SignIn from "../../features/login/pages/SignIn/SignIn";
import { SignInRoutes } from "../../features/login/constants/routes";
import { CardRoutes } from "../../features/card/constants/routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CardSolicitar } from "../../features/card/pages/CardSolicitar/CardSolicitar";
import CardAddress from "../../features/card/pages/CardEntrega/CardAddress";

export const RouterComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path={SignInRoutes.signIn}
          component={SignIn}
        />
        <Route
          exact path={CardRoutes.card}
          component={CardSolicitar}
        />
        <Route
          exact path={CardRoutes.cardDeliver}
          component={CardAddress}
        />
      </Switch>
    </BrowserRouter>
  )
}