import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

import Logo from "../Logo";
import ContainerMotion from "../Animation";
import { Loading } from "../../pages/Dashboard/styles";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading) {
    return (
      <ContainerMotion>
        <Loading>
          <Logo />
          <strong>Carregando...</strong>
        </Loading>
      </ContainerMotion>
    );
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
