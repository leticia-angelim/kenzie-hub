import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export interface ITech {
  id: string;
  title: string;
  status: string;
}

interface ITechProviderProps {
  children: ReactNode;
}

interface ITechContext {
  setTechId: Dispatch<SetStateAction<string>>;
  addModal: boolean;
  setAddModal: Dispatch<SetStateAction<boolean>>;
  updateModal: boolean;
  setUpdateModal: Dispatch<SetStateAction<boolean>>;
  createTech: (data: ITech) => Promise<void>;
  updateTech: (data: ITech) => Promise<void>;
  deleteTech: (e: { preventDefault: () => void }) => Promise<void>;
}

const TechContext = createContext<ITechContext>({} as ITechContext);

export const TechProvider = ({ children }: ITechProviderProps) => {
  const [techId, setTechId] = useState("");
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const createTech = async (data: ITech) => {
    try {
      await api.post("/users/techs", data);

      setAddModal(false);
      toast.success("Tecnologia cadastrada!");
    } catch {
      toast.error("Ops! Essa tecnologia já existe, tente atualizá-la");
    }
  };

  const updateTech = async (data: ITech) => {
    await api.put(`/users/techs/${techId}`, data);

    setUpdateModal(false);
    toast.success("Tecnologia atualizada!");
  };

  const deleteTech = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await api.delete(`/users/techs/${techId}`);

    setUpdateModal(false);
    toast.success("Tecnologia excluída!");
  };

  return (
    <TechContext.Provider
      value={{
        setTechId,
        addModal,
        setAddModal,
        updateModal,
        setUpdateModal,
        createTech,
        updateTech,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export const useTechContext = () => useContext(TechContext);
