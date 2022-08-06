import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

import api from "../../services/api";
import Logo from "../../components/Logo";
import ContainerMotion from "../../components/Animation";

import {
  FormContainer,
  Form,
  GrayButton,
  InputBox,
  PinkButton,
} from "../../styles/form";
import { Loading } from "./styles";

const Login = ({ setUser }) => {
  const [loadind, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const loginUser = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        setLoading(true);

        localStorage.clear();
        localStorage.setItem("@kenzieHub:token", res.data.token);
        localStorage.setItem("@kenzieHub:userId", res.data.user.id);

        setUser(res.data.user);

        toast.success("Login efetuado com sucesso!");

        setTimeout(() => {
          setLoading(false);
          navigate(`/dashboard`);
        }, 4000);
      })
      .catch(() => toast.error("Ops! Email ou senha incorretos"));
  };

  return (
    <ContainerMotion>
      <FormContainer>
        {loadind ? (
          <ContainerMotion>
            <Loading>
              <Logo />
              <strong>Carregando...</strong>
            </Loading>
          </ContainerMotion>
        ) : (
          <>
            <Logo />
            <Form onSubmit={handleSubmit(loginUser)}>
              <h2>Login</h2>

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
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Digite aqui sua senha"
                  {...register("password")}
                />
                {showPassword ? (
                  <MdVisibilityOff
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <MdVisibility
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
                <p>{errors.password?.message}</p>
              </InputBox>

              <PinkButton type="submit">Entrar</PinkButton>

              <span>Ainda não possui uma conta?</span>
              <GrayButton to={"/register"}>Cadastre-se</GrayButton>
            </Form>
          </>
        )}
      </FormContainer>
    </ContainerMotion>
  );
};

export default Login;
