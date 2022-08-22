import { useForm } from "react-hook-form";
import { useState } from "react";

import { ITech, useTechContext } from "../../contexts/TechContext";

import { InputBox } from "../Form";
import { ModalBox, ModalContainer, ModalTitle } from "../Modal/styles";

interface IUpdateModalProps {
  title: string;
  status: string;
}

const UpdateModal = ({ title, status }: IUpdateModalProps) => {
  const { updateTech, deleteTech, setUpdateModal } = useTechContext();
  const { register, handleSubmit } = useForm<ITech>();

  const [disabledButton, setDisabledButton] = useState(true);

  return (
    <ModalContainer>
      <ModalBox>
        <ModalTitle>
          <h3>Tecnologia Detalhes</h3>
          <button onClick={() => setUpdateModal(false)}>X</button>
        </ModalTitle>

        <form onSubmit={handleSubmit(updateTech)}>
          <InputBox>
            <label htmlFor="title">Nome do projeto</label>
            <input id="title" type="text" value={title} disabled />
          </InputBox>

          <InputBox>
            <label htmlFor="status">Status</label>
            <select
              id="status"
              defaultValue={status}
              {...register("status")}
              onChange={() => {
                setDisabledButton(false);
              }}
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </InputBox>

          <div className="buttons">
            <button
              className={disabledButton ? "disabled-button" : "pink-button"}
              type="submit"
              disabled={disabledButton ? true : false}
            >
              Salvar alterações
            </button>
            <button className="gray-button" onClick={deleteTech}>
              Excluir
            </button>
          </div>
        </form>
      </ModalBox>
    </ModalContainer>
  );
};

export default UpdateModal;
