import { ReactNode } from "react";
import { TechProvider } from "./TechContext";
import { UserProvider } from "./UserContext";

interface IProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};

export default Providers;
