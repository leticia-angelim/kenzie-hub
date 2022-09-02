import { Navigate, Outlet, useLocation } from "react-router-dom";

import Logo from "../Logo";
import { useUserContext } from "../../contexts/UserContext";

import ContainerMotion from "../Animation";
import { Loading } from "../../pages/Dashboard/styles";

const ProtectedRoutes = () => {
  const { loading } = useUserContext();
  const location = useLocation();

  const token = localStorage.getItem("@kenzieHub:token");

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

  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
