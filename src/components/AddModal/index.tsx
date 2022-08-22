import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ITech, useTechContext } from "../../contexts/TechContext";

import { InputBox, PinkButton } from "../Form";
import { ModalBox, ModalContainer, ModalTitle } from "../Modal/styles";

const AddModal = () => {
  const { createTech, setAddModal } = useTechContext();

  const schema = yup.object({
    title: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITech>({
    resolver: yupResolver(schema),
  });

  return (
    <ModalContainer>
      <ModalBox>
        <ModalTitle>
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={() => setAddModal(false)}>X</button>
        </ModalTitle>

        <form onSubmit={handleSubmit(createTech)}>
          <InputBox>
            <label htmlFor="title">Nome</label>
            <input
              id="title"
              type="text"
              placeholder="Typescript"
              {...register("title")}
            />
            <p>{errors.title?.message}</p>
          </InputBox>

          <InputBox>
            <label htmlFor="status">Selecionar status</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </InputBox>

          <PinkButton type="submit">Cadastrar Tecnologia</PinkButton>
        </form>
      </ModalBox>
    </ModalContainer>
  );
};

export default AddModal;
