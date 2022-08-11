import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const UserContext = createContext({});
export const TechContext = createContext({});

const Providers = ({ children }) => {
  const [user, setUser] = useState(null);
  const [techs, setTechs] = useState([]);
  const [techId, setTechId] = useState("");

  const [loading, setLoading] = useState(true);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      await api.post("/users", data);

      toast.success("Conta criada com sucesso!");

      navigate("/login", { replace: true });
    } catch {
      toast.error("Ops! Email já cadastrado");
    }
  };

  const loginUser = async (data) => {
    try {
      const response = await api.post("/sessions", data);

      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

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
          api.defaults.headers.authorization = `Bearer ${token}`;

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

  const createTech = async (data) => {
    try {
      await api.post("/users/techs", data);

      setAddModal(false);
      toast.success("Tecnologia cadastrada!");
    } catch {
      toast.error("Ops! Essa tecnologia já existe, tente atualizá-la");
    }
  };

  const updateTech = async (data) => {
    await api.put(`/users/techs/${techId}`, data);

    setUpdateModal(false);
    toast.success("Tecnologia atualizada!");
  };

  const deleteTech = async (e) => {
    e.preventDefault();

    await api.delete(`/users/techs/${techId}`);

    setUpdateModal(false);
    toast.success("Tecnologia excluída!");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        techs,
        registerUser,
        loginUser,
        loading,
      }}
    >
      <TechContext.Provider
        value={{
          createTech,
          updateTech,
          deleteTech,
          addModal,
          setAddModal,
          updateModal,
          setUpdateModal,
          setTechId,
        }}
      >
        {children}
      </TechContext.Provider>
    </UserContext.Provider>
  );
};

export default Providers;
