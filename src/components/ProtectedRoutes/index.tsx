import { Navigate, Outlet, useLocation } from "react-router-dom";

import Logo from "../Logo";
import { useUserContext } from "../../contexts/UserContext";

import ContainerMotion from "../Animation";
import { Loading } from "../../pages/Dashboard/styles";

const ProtectedRoutes = () => {
  const { user, loading } = useUserContext();
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
