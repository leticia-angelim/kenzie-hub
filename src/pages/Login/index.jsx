import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { UserContext } from "../../contexts/UserContext";

import Logo from "../../components/Logo";
import ContainerMotion from "../../components/Animation";

import {
  FormContainer,
  Form,
  GrayButton,
  InputBox,
  PinkButton,
} from "../../components/Form";

const Login = () => {
  const { loginUser } = useContext(UserContext);
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

  return (
    <ContainerMotion>
      <FormContainer>
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
              <MdVisibilityOff onClick={() => setShowPassword(!showPassword)} />
            ) : (
              <MdVisibility onClick={() => setShowPassword(!showPassword)} />
            )}
            <p>{errors.password?.message}</p>
          </InputBox>

          <PinkButton type="submit">Entrar</PinkButton>

          <span>Ainda não possui uma conta?</span>
          <GrayButton to={"/register"}>Cadastre-se</GrayButton>
        </Form>
      </FormContainer>
    </ContainerMotion>
  );
};

export default Login;
