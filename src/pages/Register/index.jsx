import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validators/registerUser";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import Logo from "../../components/Logo";
import ContainerMotion from "../../components/Animation";

import { Header, LinkButton } from "./styles";
import { FormContainer, Form, InputBox, PinkButton } from "../../styles/form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const registerUser = (data) => {
    api
      .post("/users", data)
      .then(() => {
        toast.success("Conta criada com sucesso!");

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch(() => toast.error("Ops! Email já cadastrado"));
  };

  return (
    <ContainerMotion>
      <FormContainer>
        <Header>
          <Logo />
          <LinkButton to={"/login"}>Voltar</LinkButton>
        </Header>

        <Form onSubmit={handleSubmit(registerUser)}>
          <h2>Crie sua conta</h2>
          <h6>Rapido e grátis, vamos nessa</h6>

          <InputBox>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
          </InputBox>

          <InputBox>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </InputBox>

          <InputBox>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </InputBox>

          <InputBox>
            <label htmlFor="confirm-password">Confirmar Senha</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Digite novamente sua senha"
              {...register("confirmPassword")}
            />
            <p>{errors.confirmPassword?.message}</p>
          </InputBox>

          <InputBox>
            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              id="bio"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <p>{errors.bio?.message}</p>
          </InputBox>

          <InputBox>
            <label htmlFor="contact">Contato</label>
            <input
              type="text"
              id="contact"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <p>{errors.contact?.message}</p>
          </InputBox>

          <InputBox>
            <label htmlFor="course_module">Selecionar módulo</label>
            <select id="course_module" {...register("course_module")}>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro Módulo
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo Módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro Módulo
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto Módulo
              </option>
            </select>
          </InputBox>

          <PinkButton type="submit">Cadastrar</PinkButton>
        </Form>
      </FormContainer>
    </ContainerMotion>
  );
};

export default Register;
