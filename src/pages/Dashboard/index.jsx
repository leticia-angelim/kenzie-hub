import Logo from "../../components/Logo";
import ContainerMotion from "../../components/Animation";

import { LinkButton } from "../Register/styles";
import { Container, Header, Line, Main, Navbar } from "./styles";

const Dashboard = ({ user, setUser }) => {
  const handleClick = () => {
    localStorage.clear();
    setUser([]);
  };

  return (
    <ContainerMotion>
      <Container>
        <Navbar>
          <Logo />
          <LinkButton onClick={handleClick} to={"/login"}>
            Sair
          </LinkButton>
        </Navbar>
        <Line />
        <Header>
          <h2>Olá, {user.name}</h2>
          <span>{user.course_module}</span>
        </Header>
        <Line />
        <Main>
          <div>
            <h3>Que pena! Estamos em desenvolvimento :(</h3>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </div>
          <div></div>
        </Main>
      </Container>
    </ContainerMotion>
  );
};

export default Dashboard;
