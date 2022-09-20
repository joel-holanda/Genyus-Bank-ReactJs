import SignIn from "../../features/login/pages/SignIn/SignIn";
import { SignInRoutes } from "../../features/login/constants/routes";
import { CardRoutes } from "../../features/card/constants/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardSolicitar } from "../../features/card/pages/CardSolicitar/CardSolicitar";
import CardAddress from "../../features/card/pages/CardEntrega/CardAddress";
import { CardSuccess } from "../../features/card/pages/CardSuccess/CardSuccess";
import { HomePage } from "../../features/login/pages/Home/HomePage";
import { RecoverPasswordRoutes } from "../../features/recoverPassword/constants/routes";
import { ClientCPF } from "../../features/recoverPassword/pages/informCPF/ClientCPF";
import { RequestPassword } from "../../features/recoverPassword/pages/requestPassword/RequestPassword";

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
          element={<HomePage />}
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
        <Route
          path={CardRoutes.cardDeliverSuccess}
          element={<CardSuccess />}
        />


        <Route
          path={RecoverPasswordRoutes.clientCPF}
          element={<ClientCPF />}
        /> 
        <Route
          path={RecoverPasswordRoutes.requestPassword}
          element={<RequestPassword />}
        /> 
      </Routes>
    </BrowserRouter>
  )
}