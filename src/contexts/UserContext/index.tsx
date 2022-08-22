import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  loginUserRequest,
  registerUserRequest,
} from "../../services/userRequests";
import { ITech } from "../TechContext";
import api from "../../services/api";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  course_module: string;
  bio: string;
  contact: string;
  techs?: ITech[];
}

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  techs?: ITech[];
  loading: boolean;
  registerUser: (data: IUser) => Promise<void>;
  loginUser: (data: IUser) => Promise<void>;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [techs, setTechs] = useState<ITech[] | undefined>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const registerUser = async (data: IUser) => {
    try {
      await registerUserRequest(data);

      toast.success("Conta criada com sucesso!");

      navigate("/login", { replace: true });
    } catch {
      toast.error("Ops! Email já cadastrado");
    }
  };

  const loginUser = async (data: IUser) => {
    try {
      const response = await loginUserRequest(data);

      const { user: userResponse, token } = response;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser(userResponse);
      setTechs(userResponse.techs);

      localStorage.clear();
      localStorage.setItem("@kenzieHub:token", token);
      localStorage.setItem("@kenzieHub:userId", userResponse.id);

      toast.success("Login efetuado com sucesso!");

      navigate("/dashboard", { replace: true });
    } catch {
      toast.error("Ops! Email e/ou senha incorretos");
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@kenzieHub:token");

      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          const { data } = await api.get("/profile");

          setUser(data);
          setTechs(data.techs);
        } catch {
          localStorage.clear();
        }
      }
      setLoading(false);
    };

    loadUser();
  }, [techs]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        techs,
        loading,
        registerUser,
        loginUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
