import SignIn from "../../features/login/pages/SignIn/SignIn";
import { SignInRoutes } from "../../features/login/constants/routes";
import { CardRoutes } from "../../features/card/constants/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardSolicitar } from "../../features/card/pages/CardSolicitar/CardSolicitar";
import CardAddress from "../../features/card/pages/CardEntrega/CardAddress";
import { CardSuccess } from "../../features/card/pages/CardSuccess/CardSuccess";

export const RouterComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={SignInRoutes.signIn}
          element={<SignIn />}
        />
        <Route
          path={SignInRoutes.homePage}
          element={<SignIn />}
        />
        <Route
          path={CardRoutes.card}
          element={<CardSolicitar />}
        />
        <Route
          path={CardRoutes.cardDeliver}
          element={<CardAddress />}
        />
        <Route
          path={CardRoutes.cardDeliverSuccess}
          element={<CardSuccess />}
        />
      </Routes>
    </BrowserRouter>
  )
}